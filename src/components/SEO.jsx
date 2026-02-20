import { useEffect } from 'react'

const SITE_URL = 'https://orbitaspaces.vercel.app'
const DEFAULT_IMAGE = `${SITE_URL}/logo.jpg`
const SITE_NAME = 'Orbita'

/**
 * SEO component - sets document title and meta tags dynamically.
 * No external dependencies needed.
 */
export default function SEO({
    title = 'Orbita | 당신만의 빛나는 궤도를 함께 그립니다',
    description = '크리에이터가 자신만의 궤도를 찾아 빛날 수 있도록 돕는 크리에이터 양성 전문 기업',
    path = '/',
    image = DEFAULT_IMAGE,
    keywords = '오르비타, Orbita, 크리에이터, 크리에이터 양성, 인큐베이팅, MCN, 콘텐츠 크리에이터, 유튜브, 틱톡',
}) {
    const url = `${SITE_URL}${path}`

    useEffect(() => {
        // Title
        document.title = title

        // Helper to set or create a meta tag
        const setMeta = (attr, key, content) => {
            let el = document.querySelector(`meta[${attr}="${key}"]`)
            if (!el) {
                el = document.createElement('meta')
                el.setAttribute(attr, key)
                document.head.appendChild(el)
            }
            el.setAttribute('content', content)
        }

        // Standard meta
        setMeta('name', 'description', description)
        setMeta('name', 'keywords', keywords)

        // Canonical
        let canonical = document.querySelector('link[rel="canonical"]')
        if (!canonical) {
            canonical = document.createElement('link')
            canonical.setAttribute('rel', 'canonical')
            document.head.appendChild(canonical)
        }
        canonical.setAttribute('href', url)

        // Open Graph
        setMeta('property', 'og:title', title)
        setMeta('property', 'og:description', description)
        setMeta('property', 'og:url', url)
        setMeta('property', 'og:image', image)
        setMeta('property', 'og:type', 'website')
        setMeta('property', 'og:site_name', SITE_NAME)
        setMeta('property', 'og:locale', 'ko_KR')

        // Twitter Card
        setMeta('name', 'twitter:card', 'summary_large_image')
        setMeta('name', 'twitter:title', title)
        setMeta('name', 'twitter:description', description)
        setMeta('name', 'twitter:image', image)
    }, [title, description, url, image, keywords])

    return null // This component renders nothing
}
