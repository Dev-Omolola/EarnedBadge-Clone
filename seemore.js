const info = [
    {
        id: 1,
        
        h1: 'Qualification Recognition ',
        h4: 'Providing a digital certificate and a badgee for your qualifications enables your learners to be more widely recognized for your qualification. A Digital Badge can be shared and used in multiple ways in our modern digital word.',
        img: 'https://earnedbadge.netlify.app/bigWhy/qualification.png',
        p: [
            'Reinforce your brand and awareness of your qualifications',
            'Provide a Digital Currency for your learners, e.g; in their Resumes',
            'Differentiate the value that your programs provide',
            'Improve the security and auditability for your certifiction process.'
        ]
    },
    {
        id: 2,
        
        h1: 'Motivating Small Steps',
        h4: 'Create different badges for small steps in your training programs, so that learners can be recognized and motivated for acjieving specific outcomes, building to your overall completion award.',
        img:'https://earnedbadge.netlify.app/bigWhy/motivation.png',
        p: [
            'Encourage and reward progression',
            'Gamify your learning program',
            'Monitor progression more easily',
            'Create clear pathways to success.'
        ]
    },
    {
        id: 3,
        
        h1: 'Modern Certification',
        h4: 'Upgrade from printing and mailing paper certificates to Digital Certificates supported bya portable badge credential Savetime and money while improving the service and value you provide users.',
        img:'https://earnedbadge.netlify.app/bigWhy/modern.png',
        p: [
            'Encourage and reward progression',
            'Gamify your learning program',
            'Monitor progression more easily',
            'Create clear pathways to success.'
        ]
    },
    {
        id: 4,
    
        h1: 'Skills Portability',
        h4: 'Discovering your learner’s skills and competencies becomes much easier and valuable to the learner If you have provided them with a Digital Credential that they can share widely.',
        img:'https://earnedbadge.netlify.app/bigWhy/skills.png',
        p: [
            'Make Resumes stand out from the crowd with Digital Badges.',
            'Share skills via Badgess on LinkedIn & other social media platforms.',
            'Unlock skills data within Digital Badges. ',
            'Future-proof to international standards'
        ]
    },
    {
        id: 5,
        
        h1: 'Evidence Professional Development',
        h4: 'A modern Digital Credential or Digital Badge becomes recognizable, discoverable and verifiable evidence of professional mastery and/or completion of a training program.',
        img:'https://earnedbadge.netlify.app/bigWhy/evidence.png',
        p: [
            'Enhance your organisation’s brand and reputation.',
            'Provide your uses with a portable skills currency',
            'For membership organizations, support communities of practice',
            'Support tiered delivery via accredited centers.'
        ]
    },
    {
        id: 6,
        
        h1: 'Event Attendance',
        h4: 'Easily create communities of users for your events and conferences where your attendees can all idwentify shared experiences via their badge, display on Linkedin and generally indicate that they are proud members of your community.',
        img:'https://earnedbadge.netlify.app/bigWhy/event.png',
        p: [
            'Quickly issue badges to attendees from an imoort file',
            'Promote brand awareness and recognition of your events',
            'Recognize continuing professional development',
            'Provide verifiable evidence of event attendance'
        ]
    },
    {
        id: 7,
        
        h1: 'Integrate with existing systems',
        h4: 'Implement Digital Badges and Certificates without the disruption of replacing your existing processes and systems. Use our advanced APIs and plug-ins to seamlessly integrate with your existing workflows.',
        img: 'https://earnedbadge.netlify.app/bigWhy/integrate.png',
        p: [
            'Quickly issue badges to attendees from an imoort file',
            'Promote brand awareness and recognition of your events',
            'Recognize continuing professional development',
            'Provide verifiable evidence of event attendance'
        ]
    },
    {
        id: 8,
        
        h1: 'Fight off Fake Credentials',
        h4: 'With one click, get your credentials verified. Digital credentials verification protects your organization and brand by fighting off fake certification from people who will destroy your reputation.',
        img: 'https://earnedbadge.netlify.app/bigWhy/fight.png',
        p: [
            'Let emoloyers be sure they have the right person',
            'Build trust with your brand',
            'Be sure no one can produce a fake qualification',
            'One clicks verification'
        ]
    }
]

let id = localStorage.getItem("theId")
console.log(id);

function showOne() {
    let [item] = info.filter(el => el.id == id)
    console.log(item);
    document.getElementById("oneItem").innerHTML = `
    <div class='mm'>
         <h1>${item.h1}</h1>
        <h4>${item.h4}</h4>
        <div class='container'>
        <div class='row py-5'>
            <div class='col'>
                <img src='${item.img}' />
            </div>
            <div id='check' class='col'></div>
        </div>
        </div>
    `
    for (let index = 0; index < item.p.length; index++) {
        const element = item.p[index];
        document.getElementById("check").innerHTML += `
            <ul>
                <li>${element}</li>
            </ul>
        `
    }
}
showOne()