import React from 'react';

interface Contribution {
    title: string;
    description: string;
    projectLink: string;
    socialLink: string;
    socialIcon: string;
    iframe?: string; // Optional iframe for contributions with embedded content
}

const contributions: Contribution[] = [
    {
        title: 'Hackathon Esprit SLEAM VS SIM',
        description: 'Showcasing our hackathon project shared on Facebook.',
        projectLink: '#', // Replace with actual project link
        socialLink: 'https://www.facebook.com/Simesprit',
        socialIcon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg', // Facebook icon
        iframe: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSimesprit%2Fposts%2Fpfbid0XKHf67w4AeiC6HJs7xmkPoXBRbLYsfWkY68KZrmGvqXq7ePmSaW5A6RdEyQUA29Ql&show_text=true&width=500" width="500" height="807" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    },
    {
        title: 'Hackathon Name 1',
        description: 'Short description of the project or hackathon contribution.',
        projectLink: 'https://github.com/your-project',
        socialLink: 'https://github.com/your-profile',
        socialIcon: '/path/to/github-icon.svg', // Replace with actual GitHub icon path
    },
    {
        title: 'Hackathon Name 2',
        description: 'Brief description of your role and the competition.',
        projectLink: 'https://link-to-project-or-competition',
        socialLink: 'https://linkedin.com/in/your-profile',
        socialIcon: '/path/to/linkedin-icon.svg', // Replace with actual LinkedIn icon path
    },
    {
        title: 'Competition Name 3',
        description: 'Summary of the competition, your team, and your role.',
        projectLink: 'https://link-to-competition-results',
        socialLink: 'https://twitter.com/your-profile',
        socialIcon: '/path/to/twitter-icon.svg', // Replace with actual Twitter icon path
    },
];

const SocialMediaContributions: React.FC = () => {
    return (
        <section id="contributions" className="bg-background text-foreground py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center mb-8">Social Media Contributions</h2>
                <p className="text-center text-lg mb-12">
                    Check out my contributions to various hackathons, competitions, and open-source projects on social media.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contributions.map((contribution, index) => (
                        <div
                            key={index}
                            className="bg-card p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold">{contribution.title}</h3>
                                <a href={contribution.socialLink} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={contribution.socialIcon}
                                        alt="Social Media"
                                        className="w-6 h-6"
                                    />
                                </a>
                            </div>
                            <p className="text-start mb-4">{contribution.description}</p>
                            {contribution.iframe && (
                                <div
                                    className="mb-4"
                                    dangerouslySetInnerHTML={{ __html: contribution.iframe }}
                                />
                            )}
                            <a
                                href={contribution.projectLink}
                                className="text-primary hover:underline"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialMediaContributions;