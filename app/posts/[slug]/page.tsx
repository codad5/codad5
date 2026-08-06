import { getPostContent, getPostMetadata, getPostsAndMetadata } from "@/app/helpers/post";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { postsType } from "@/app/components/types";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from 'next/navigation'
import ShareButton from "@/app/components/shareButton";
import BlogPost from "@/app/components/BlogPost";
import 'highlight.js/styles/atom-one-dark-reasonable.css'


export const generateStaticParams = () => {
    const posts = getPostsAndMetadata();
    return posts.map((post) => ({
            slug: post.slug     
    }))
}

export async function generateMetadata({ params, searchParams } : { params: Promise<{slug: string}>, searchParams : Promise<any> }) : Promise<Metadata> {
    const { slug } = await params;
    const postdata = getPostMetadata(slug)
    if(!postdata) return {};
    const { title, date, description, tags, image } = postdata
    const pageUrl = `https://codad5.me/posts/${slug}`;
    const formattedTitle = title ? `${title} | Chibueze Aniezeofor (codad5)` : 'Chibueze Aniezeofor (codad5)';
    
    return {
        title: formattedTitle,
        description: description ?? 'Technical article on software engineering, PHP, Node.js, TypeScript, and Python by Chibueze Aniezeofor (codad5).',
        generator: 'Next.js',
        applicationName: 'Codad5',
        referrer: 'origin-when-cross-origin',
        keywords: tags ?? ['codad5', 'Chibueze Aniezeofor', 'Software Engineer', 'PHP', 'Node.js', 'TypeScript', 'Python', 'Rust'],
        authors: [{ name: 'Chibueze Aniezeofor', url: 'https://codad5.me' }],
        creator: 'Chibueze Aniezeofor (codad5)',
        publisher: 'Chibueze Aniezeofor',
        alternates: {
            canonical: pageUrl,
        },
        formatDetection: {
            email: true,
            address: false,
            telephone: true,
        },
        openGraph: {
            title: formattedTitle,
            description: description ?? 'Technical article by Chibueze Aniezeofor (codad5).',
            url: pageUrl,
            siteName: 'Chibueze Aniezeofor (codad5)',
            publishedTime: date,
            authors: ['Chibueze Aniezeofor', 'codad5'],
            images: [
                {
                    url: image ?? 'https://avatars.githubusercontent.com/u/66634814?v=4',
                    width: 800,
                    alt: title ?? 'Chibueze Aniezeofor (codad5) Software Engineer',
                    height: 800,
                },
            ],
            locale: 'en-US',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@codad5_',
            description: description ?? 'Technical article by Chibueze Aniezeofor (codad5).',
            title: formattedTitle,
            creator: '@codad5_',
            images: [image ?? 'https://avatars.githubusercontent.com/u/66634814?v=4'],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}

 const PostPage = async ({params}:{params: Promise<{slug: string}>}) => {
    const { slug } = await params;
    const postContents = getPostContent(slug);
    if(!postContents) notFound()
    const { content, data } = matter(postContents);
    const { title, date, image , tags, description} = data as postsType
    return (
        <BlogPost title={title} slug={slug} date={date} tags={tags} image={image} description={description}>
            {content}
        </BlogPost>
    )
}


export default PostPage
