<script setup lang="ts">
import { reactive } from 'vue';

const date = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const month = months[date.getMonth()];
const fullYear = date.getFullYear();

const content = {
    title: ["Jason Atkinson,", "Creative Developer"],
    month: month,
    year: fullYear,
    location: "London",
    subtitle: [
        "At my core I am a creative problem solver.",
        "This passion and creative need to understand,", 
        "is the driving force behind everything I do."
    ],
    sections: [
        {
            title: "Skills",
            sections: [
                {
                    title: "Programming skills",
                    skills: [
                        "HTML", "CSS", "Less", "Sass", "Tailwind CSS", "JavaScript (including OOP)", "NodeJS", "VueJS", "StencilJS", "PHP (including OOP)", "WordPress Theme and Plugin use and development", "Craft CMS", "Yii"
                    ]
                },
                {
                    title: "Developer Tools",
                    skills: [
                        "Docker", "DDEV", "VMs", "VS Code", "Figma", "Adobe XD", "Zeplin", "Xcode", "BrowserStack"
                    ]
                },
                {
                    title: "Computer skills",
                    skills: [
                        "Working with both Windows and Apple operating platforms.", "Microsoft Office: Word, PowerPoint, Excel, and Outlook.", "Adobe: Photoshop, Illustrator, InDesign, XD, Dreamweaver and Premier.", "Microsoft Teams", "Slack", "Discord"
                    ]
                },
                {
                    title: "Personal Interest skills",
                    skills: [
                        "Typography", "Layout", "Interaction", "Art", "Design", "Photography", "Videography", "Illustration", "and Learning science"
                    ]
                }
            ],
            additionalInfo: "As much as these skills are important to me, my ability to pick up new skills quickly and easily is just as essential as such I have built up a methodology to do this."
        },
        {
            title: "Education",
            sections: [
                {
                    date: "2010 - 2013",
                    courses: [
                        {
                            title: "BA(Hons) Graphic Design: New Media",
                            grade: "[2:1]",
                        },
                    ],
                    location: "University for the Creative Arts (UCA) Epsom",
                },
                {
                    date: "2013 - 2014",
                    courses: [
                        {
                            title: "Diploma in Web Design",
                            grade: "[DISTINCTION][MERIT]",
                        },
                    ],
                    location: "Open Awards",
                },
                {
                    date: "2008 - 2010",
                    courses: [
                        {
                            title: "BTEC National Diploma in Art and Design",
                            grade: "[MERIT][MERIT][DISTINCTION]",
                        },
                    ],
                    location: "University for the Creative Arts (UCA) Rochester",
                },
                {
                    date: "2003 - 2008",
                    courses: [
                        {
                            title: "GCSE's English, Maths, Statistics, Science, Geography, Art, Graphics",
                            grade: "[2xB][5xC]",
                        },
                        {
                            title: "DIDA in ICT",
                            grade: "[Credit]",
                        },
                    ],
                    location: "Hundred of Hoo School",
                },
            ]
        },
        {
            title: "Extra Education",
            sections: [
                {
                    date: "2023 - 2024",
                    courses: [
                        {
                            title: "JavaScript Algorithms and Data Structures",
                        },
                        {
                            title: "Back End Development",
                        },
                        {
                            title: "Responsive Web Design",
                        },
                    ],
                    location: "freecodecamp.org",
                },
                {
                    date: "2017",
                    courses: [
                        {
                            title: "The Online Marketing Fundamentals",
                        },
                    ],
                    location: "Google",
                },
                {
                    date: "2014 - 2019",
                    courses: [
                        {
                            title: "Front End Web Development",
                        },
                        {
                            title: "Data Analysis",
                        },
                        {
                            title: "Web Design",
                        },
                    ],
                    location: "teamtreehouse.com",
                },
            ],
            additionalInfo: "Not only is development my job, but it is also my passion as hopefully I have shown by this section."
        },
        {
            title: "Employment",
            sections: [
                {
                    date: "2021 - 2024",
                    roles: [
                        {
                            title: "Front-end Developer",
                            location: "Sponge Learning (Digital Learning Provider) Europe",
                            description: [
                                "Managing environments for client preview and internal testing.",
                                "Building and maintaining courses, apps, and websites; using various technologies to be installed onto the clients preferred hosting system.",
                                "Working as part of a remote development team. Contributing to ticket requests, and internal tool development to improve proficiencies through collaboration."
                            ]
                        }
                    ]
                },
                {
                    date: "2017 - 2022",
                    roles: [
                        {
                            title: "Full-stack Web Developer",
                            location: "Rock Mission (Growth Marketing Agency) London",
                            description: [
                                "Managing the hosting and security of multiple websites.",
                                "Developing custom themes, when required and using a multi-purpose theme (Divi) for development when speed is of importance.",
                                "Working with others to solve technique problems both remotely and in person.",
                            ]
                        },
                        {
                            title: "Full-stack Web Developer",
                            location: "Bottomless Brunch (Restaurant booking Platform) London",
                            description: [
                                "Building the original custom theme and functionality which the platform is built on.",
                                "Working using the Kanban board method to improve on the platform incrementally within a small remote development team as well as being responsible for the testing and deployment of the changes.",
                            ]
                        }
                    ]
                },
                {
                    date: "2017",
                    roles: [
                        {
                            title: "Invigilator",
                            location: "University of Kent (Academic Institution) Medway",
                            description: [
                                "Upholding examination conditions by being vigilant and contributing to the welfare of the students."
                            ]
                        }
                    ]
                },
                {
                    date: "2016 - 2017",
                    roles: [
                        {
                            title: "Web Designer",
                            location: "Sitewizard Ltd (Web Design Agency) Maidstone",
                            description: [
                                "Designing, coding and deployment of websites in accordance to briefs as well as the maintenance and SEO improvements of existing websites."
                            ]
                        }
                    ]
                },
                {
                    date: "2014 - 2016",
                    roles: [
                        {
                            title: "Web Designer",
                            location: "Puretone Ltd (Audiological company) Rochester",
                            description: [
                                "Maintaining multiple internal and customer facing websites.",
                                "Managing Ad word Campaigns, reviewing analytic reports on sites and creating promotions which included designing email campaigns and scheduling pricing updates where needed and tracking its success or failure.",
                            ]
                        }
                    ]
                },
                {
                    date: "2013 - 2014",
                    roles: [
                        {
                            title: "Sales Assistant",
                            location: "Curry's / PC World; Dixons Group (Retail company) Rochester",
                            description: [
                                "Sales of electrical goods and reaching store targets"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: "Projects",
            sections: [
                // ???
                // Safe Driving for Life
                // NCSC
                // Snap

                // Bottomless Brunch
            ]
        },
        {
            title: "Posts",
            sections: [
                // ???
            ]
        },
        {
            title: "Talks",
            sections: [
                // ???
            ]
        },
        {
            title: "Interests",
            content: [
                "In my personal time I enjoy a variety of different hobbies.",
                "I'm a big fan of Lego, especially the technic and space themed sets and enjoy art, reading and films.",
                "I also enjoy researching how we learn, to try and improve my own methodology I use to learn new things.",
            ]
        },
    ]
};

const state = reactive({
  light: true,
  count: 0,
  time: "h" + ":" + "m" + ":" + "s",
  timeFunction: () => {
    const today = new Date();
    let h = Number(today.getHours().toLocaleString('en-GB'));
    let nh = h < 10 ? "0" + h : h;
    let m = Number(today.getMinutes().toLocaleString('en-GB'));
    let nm = m < 10 ? "0" + m : m;
    let s = Number(today.getSeconds().toLocaleString('en-GB'));
    let ns = s < 10 ? "0" + s : s;
    state.time = nh + ":" + nm + ":" + ns;
    setTimeout(() => {
        state.timeFunction();
    }, 1000);
  }
});

state.timeFunction();

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  localStorage.theme = 'dark';
} else {
  document.documentElement.classList.remove('dark');
  localStorage.theme = 'light'
}

const lightDarkMode = () => {
    state.light = !state.light;
    if(state.light) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}


</script>

<template>
<div class="
    bg-brand_bg animate-bg-fade text-brand_text 
    h-screen w-screen flex flex-col
    ">
    <div class="w-full h-full">
        <div class="flex w-8/12 h-full m-auto border-x border-brand_border">
            <div class="block w-full m-auto lg:border-y text-base text-right p-2 pb-4 border-brand_border">
                <span class="p-2 cursor-pointer underline hover:opacity-75 transition ease-in-out delay-150" :onclick="lightDarkMode">
                    {{ state.light ? "Dark Mode" : "Light Mode" }}
                </span>
            </div>
        </div>
    </div>
    <div class="h-fit w-full">
        <div class="
            border-y border-brand_border
            ">
            <div class="
            w-8/12 m-auto
            border-x border-brand_border
            ">
            <h1 class="
            text-4xl lg:text-6xl p-2 pb-12 
            ">
                <span class="
                inline-block
                text-brand_primary
                    ">
                    {{ content.title[0] + '&nbsp;' }}
                </span>
                <span class="
                inline-block
                text-brand_secondary
                    ">
                    {{ content.title[1] }}
                </span>
            </h1>
            </div>
        </div>
        <div class="
            border-b border-brand_border
            ">
            <div class="
            w-8/12 m-auto
            border-x border-brand_border
            ">
                <h2 class="
                    text-xl lg:text-2xl lg:leading-relaxed
                    p-2 pb-8
                    ">
                    {{ content.subtitle[0] }} <br>
                    {{ content.subtitle[1] }}
                    {{ content.subtitle[2] }}
                </h2>
            </div>    
        </div>
        <div class="
            border-b border-brand_border
            ">
            <div class="
            w-8/12 m-auto
            border-x border-brand_border
            ">
                <p class="
                    text-xl p-2 pb-4
                    ">
                    <span>
                        {{ state.time }}, 
                    </span>
                    <span>
                        {{ content.month }}, 
                    </span>
                    <span>
                        {{ content.year }}, 
                    </span>
                    <span>
                        {{ content.location }}.
                    </span>
                </p>
            </div>
        </div>
        <div class="
            border-b border-brand_border
            ">
            <div class="
            w-8/12 m-auto
            border-x border-brand_border
            ">
                <div class="
                    text-xl p-2 pb-4
                    ">
                    <span>
                        <span class="[&>svg]:h-5 [&>svg]:w-5 inline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        </span>
                        Links: 
                    </span>
                    <a href="https://github.com/mejasonatkinson/" target="_blank" class="hover:text-brand_secondary transition ease-in-out delay-150">
                        <!-- <i>GitHub</i> -->
                        <!-- Github -->
                        <span class="[&>svg]:h-5 [&>svg]:w-5 inline mx-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 496 512"
                            class="inline"
                            >
                            <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/mejasonatkinson/" target="_blank" class="hover:text-brand_secondary transition ease-in-out delay-150">
                        <!-- <i>LinkedIn</i> -->
                        <!-- Linkedin -->
                        <span class="[&>svg]:h-5 [&>svg]:w-5 inline mx-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                            class="inline"
                            >
                            <path
                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full h-full">
        <div class="block w-8/12 h-full mx-auto border-x border-brand_border"></div>
    </div>
</div>
</template>


<style scoped>

</style>