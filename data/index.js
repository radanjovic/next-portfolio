
export const projects = [
    {
        slug: 'next-portfolio',
        name: 'Portfolio',
        tech: 'Next.js',
        image: '/images/next/portfolio.jpg',
        youtube: 'https://youtu.be/vvkaKAyBFT0',
        github: 'https://github.com/radanjovic/next-portfolio',
        description: `
Portfolio is a portfolio website project, the one you're reading this on, and it's made to showcase all the skills I've gathered learning programming and web development. On this site, users can browse and read my resume, view all the certificates I've earned in this field, browse all the projects I've made so far (also see demo videos and source code of the projects), and see my contact information.

This project uses Next.js for frontend (it's a static website) and data fetching. It also uses mostly TailwindCSS for styling.
        `
    },
    {
        slug: 'next-shop',
        name: 'NextShop',
        tech: 'Next.js',
        image: '/images/next/next-shop.jpg',
        youtube: 'https://youtu.be/Qgrg_EVJIQk',
        github: 'https://github.com/radanjovic/next-shop',
        description: `
NextShop is a simple responsive shop app for tech products. It consists of a homepage with calls to action and featured products, a shop page with all products, and a shopping cart. Users can browse products, add them to their shopping carts and submit their orders. The owner of the site also has a custom made admin panel with all orders (where they can track which orders are shipped) and all products, together with a form to add new products.

This project uses Next.js for frontend and backend (API calls), MongoDB for database, and TailwindCSS for styling. It also uses Server Side Rendering to keep the data up to date.
        `
    },
    {
        slug: 'next-cms-blog',
        name: 'CMS Blog',
        tech: 'Next.js',
        image: '/images/next/cms-blog.jpg',
        youtube: 'https://youtu.be/2ja1nCJp9Og',
        github: 'https://github.com/radanjovic/next-cms-blog',
        description: `
CMS Blog is a simple responsive blog for tech articles, that uses GraphCMS and graphQL query language for content management in the cloud. It consists of a homepage with all posts, categories, and a carousel with featured posts. Users can browse all posts or read a specific post, comment on posts and see who the author is. The owner of the blog can create posts (along with categories, authors, etc.) in GraphCMS Panel.

This project uses Next.js for frontend and backend (API calls), GraphCMS for storing data, and TailwindCSS for styling. It was also my first time using graphQL query language, which, to be honest, I don't like all that much. It takes more time to write queries, and because of the complexity of said queries, it's much easier to make mistakes. I prefer basic REST architecture and simple DB queries.
        `
    },
    {
        slug: 'next-instagram-2-0',
        name: 'Instagram 2.0',
        tech: 'Next.js',
        image: '/images/next/instagram.jpg',
        youtube: 'https://youtu.be/lOFN-GgE3eg',
        github: 'https://github.com/radanjovic/next-instagram-2.0',
        description: `
Instagram 2.0 is a responsive clone app of Instagram. It consists of multiple Instagram-like pages and basic authentication for users. Users can browse posts, see stories container, see direct messages page, explore suggested people, explore suggested posts, add posts of their own, and finally like posts and comment on them. The design is inspired by the real Instagram web app, and this app mimics that design, but it doesn't contain logic for following users, seeing their profile page, etc.

This project uses Next.js for frontend and backend (API calls), Firebase for storage and database, TailwindCSS for styling, and NextAuth for user authentication and authorization (but only with Google Provider). It also uses Faker.js (new version) for populating user content. This project is made by following a tutorial by Sonny Sangha, but more additional features (pages) were added!
        `
    },
    {
        slug: 'next-spotify-2-0',
        name: 'Spotify 2.0',
        tech: 'Next.js',
        image: '/images/next/spotify.jpg',
        youtube: 'https://youtu.be/B4PRET-HySQ',
        github: 'https://github.com/radanjovic/next-spotify-2.0',
        description: `
Spotify 2.0 is a responsive clone app of the Spotify web app, using its own API. It consists of only one page - main page where all user's playlists are displayed, along with player and playback with controls. Users can log in with their Spotify credentials, and their playlists will be loaded. Users can change songs, set volume, etc. Design is inspired by the real Spotify web app.

This project uses Next.js for frontend and backend (API calls), Spotify API, TailwindCSS for styling, and NextAuth for user authentication and authorization (but only with Spotify Provider). It uses Next Middleware to protect the main (index) page from unauthorized access, transferring all users who are not logged in to the custom login page. The project also has custom logic for token refreshing. This project is made by following a tutorial by Sonny Sangha, but more additional features were added!
        `
    },
    {
        slug: 'next-markdown-blog',
        name: 'Markdown Blog',
        tech: 'Next.js',
        image: '/images/next/markdown-blog.jpg',
        youtube: 'https://youtu.be/-_iEouoQ_tQ',
        github: 'https://github.com/radanjovic/next-markdown-blog',
        description: `
Markdown Blog is a simple responsive personal blog app where the owner (author) can create blog posts by creating markdown files, which are then parsed and translated to Html. The app consists of homepage with author's introduction and featured posts, about page, all posts page, and contact page. Users can view all posts, read individual posts, and contact (send messages to) the author.

This project uses Next.js for frontend and backend (API calls), CSS modules for styling, and MongoDB for storing messages sent by users. It also uses React Markdown for parsing markdown content, along with a few more additional dependencies to make it all work well together.
        `
    },
    {
        slug: 'next-chat',
        name: 'NextChat',
        tech: 'Next.js',
        image: '/images/next/next-chat.jpg',
        youtube: 'https://youtu.be/zFQq4L64TqU',
        github: 'https://github.com/radanjovic/next-chat',
        description: `
NextChat is a simple chat made with Chat Engine, where users can log in with a username/password, create their own chat rooms, add people to those rooms and chat in real time with them. They can send text messages, but also images.

This project uses Next.js for frontend and Chat Engine for backend and database. It uses simple CSS for styling. This app was made following an official tutorial by Chat Engine.
        `
    },
    {
        slug: 'react-landing-page-dark',
        name: 'Dark Landing Page',
        tech: 'React',
        image: '/images/react/landing-page-dark.jpg',
        youtube: 'https://youtu.be/RVSZZQpD7rM?t=139',
        github: 'https://github.com/radanjovic/react-landing-page-dark',
        description: `
Dark-Mode Landing Page is a simple non-responsive landing page in dark mode based on Figma design by AR Shakir. This project was made by transforming said Figma Design into a full-blown landing page, in React,  to get to know Figma and construct projects based on Figma designs. Since this design only came in a full (web) size, and no designs for mobile/tablets were available, I just focused on transforming that design into code, and I did not create responsive views. Responsiveness is shown in my other projects.

This project was made using React and create-react-app and uses CSS modules for styling. It also features assets downloaded from mentioned Figma design.
        `
    },
    {
        slug: 'react-responsive-landing-page',
        name: 'Responsive Landing Page',
        tech: 'React',
        image: '/images/react/responsive-landing-page.jpg',
        youtube: 'https://youtu.be/RVSZZQpD7rM?t=293',
        github: 'https://github.com/radanjovic/react-responsive-landing-page',
        description: `
Responsive Landing Page is a simple responsive landing page made based on Figma design by AR Shakir. The purpose of this project is to get familiarized with Figma and the transformation of its design into code. The code also follows the BEM naming convention for CSS classes. Writing CSS like this in this project, I realized I didn't really like it that much, which is why I've used modules/tailwind in most of my other projects, my favorite types of CSS writing from React/Next projects. This landing page is fully responsive, as the name suggests.

This project was made using React and create-react-app, and uses global CSS classes based on the BEM naming convention, for styling. It also features assets downloaded from mentioned Figma design. This project was made following a tutorial by JS Mastery.
        `
    },
    {
        slug: 'react-food-order-app',
        name: 'Food Order App',
        tech: 'React',
        image: '/images/react/food-order-app.jpg',
        youtube: 'https://youtu.be/RVSZZQpD7rM?t=88',
        github: 'https://github.com/radanjovic/react-food-order-app',
        description: `
Food Order App is a simple app in which users see all available meals (from one 'restaurant' - app owner), can pick from those meals, add them to the shopping cart, and then submit their orders.

This project was made using React and create-react-app and uses CSS modules for styling. For backend and storage for available meals and orders, it uses Firebase.
        `
    },
    {
        slug: 'react-calculator',
        name: 'Calculator',
        tech: 'React',
        image: '/images/react/calculator.jpg',
        youtube: 'https://youtu.be/RVSZZQpD7rM?t=1',
        github: 'https://github.com/radanjovic/react-calculator',
        description: `
Calculator is a simple React calculator made for the purposes of passing Free Code Camp tests. In this app, users can add, subtract, divide and multiply numbers, including negative and decimal numbers.

This project was made using React and create-react-app and uses simple CSS for styling.
        `
    },
    {
        slug: 'react-markdown-previewer',
        name: 'Markdown Previewer',
        tech: 'React',
        image: '/images/react/markdown-previewer.jpg',
        youtube: 'https://youtu.be/RVSZZQpD7rM?t=214',
        github: 'https://github.com/radanjovic/react-markdown-previewer',
        description: `
Markdown Previewer is a simple React app made for the purposes of passing Free Code Camp tests, in which users can enter markdown text in editor textarea, and live preview the transfer of that text to regular Html that is then parsed into text in the display area.

This project was made using React and create-react-app and uses simple CSS for styling. It also uses marked-react to parse markdown and translate it to Html.
        `
    },
    {
        slug: 'react-drum-machine',
        name: 'Drum Machine',
        tech: 'React',
        image: '/images/react/drum-machine.jpg',
        youtube: 'https://youtu.be/RVSZZQpD7rM?t=56',
        github: 'https://github.com/radanjovic/react-drum-machine',
        description: `
Drum Machine is a simple React app made for the purposes of passing Free Code Camp tests, in which users can press their keyboard keys or press a button on the screen to simulate sounds made by a drum set.

This project was made using React and create-react-app and uses simple CSS for styling.
        `
    },
    {
        slug: 'react-random-quote-machine',
        name: 'Random Quote Machine',
        tech: 'React',
        image: '/images/react/random-quote-machine.jpg',
        youtube: 'https://youtu.be/RVSZZQpD7rM?t=258',
        github: 'https://github.com/radanjovic/react-random-quote-machine',
        description: `
Random Quote Machine is a simple React app made for the purposes of passing Free Code Camp tests, in which users see a random quote and its author, and with the press of a button they can generate a new one.

This project was made using React and create-react-app and uses simple CSS for styling.
        `
    },
    {
        slug: 'django-astator',
        name: 'Astator',
        tech: 'Django',
        image: '/images/django/astator.jpg',
        youtube: 'https://youtu.be/wnu6Z26_0xY',
        github: 'https://github.com/radanjovic/django-astator',
        description: `
Astator is a Capstone Project for the CS50w course - Programming with Python and JavaScript by HarvardX. This project consists of full-fledged responsive web app made with Django, called Astator. Astator is a small, members-only, web app built around the needs of fiction authors and aspiring authors. It enables them to share their work with other people and get first-hand impressions, suggestions, and comments before getting their work published. On Astator, authors can share their concepts (initial ideas with the overall plot and story characters), short stories, and drafts of their fiction novels, screenplays, etc. Readers can read everything on the Astator for free. Astator consists of many different views and templates, main of which are read - for reading scripts, explore - for exploring both different scripts and authors, script pages - for viewing script's details, ratings, etc.,  and profile pages - pages of authors. Full project description and overview are available in the README.md file in this project's repo on GitHub.

This project was made with Django on the backend, SQLite for the database, and HTML, CSS, and vanilla JS (with a little bit of jQuery) on the frontend. For styling, Bootstrap is also used. For Image manipulation, the Pillow library is used. Finally, for reading word (.docx) documents, the python-docx library is also used.
        `
    },
    {
        slug: 'django-network',
        name: 'Network',
        tech: 'Django',
        image: '/images/django/network.jpg',
        youtube: 'https://youtu.be/TeYFOVpbpvA',
        github: 'https://github.com/radanjovic/django-network',
        description: `
Network is a project no.4 for the CS50w course - Programming with Python and JavaScript by HarvardX. This project consists of a social-network-like web app, with basic networking functionality: Logged in users can create posts and edit created (by them) posts, like posts (async), see all posts, follow other users, view posts made by users they follow, view user's profile pages, etc. Full project description and overview, along with all the project requirements are available in the README.md file in this project's repo on GitHub.

This project was made with Django on the backend, SQLite for the database, and HTML, CSS, and vanilla JS on the frontend. For styling, Bootstrap is also used.
        `
    },
    {
        slug: 'django-mail',
        name: 'Mail',
        tech: 'Django',
        image: '/images/django/mail.png',
        youtube: 'https://youtu.be/gIE5Yy99nc8',
        github: 'https://github.com/radanjovic/django-mail',
        description: `
Mail is a project no.3 for the CS50w course - Programming with Python and JavaScript by HarvardX. This project consists of a Gmail-like single-page web application that allows logged-in users to send emails to each other. Each user can create his address, and use that address to send emails to other users on the same network (of course, the mail provider is simulated in this type of app). Users can see all the emails in their inbox, and read each mail, after which it will be marked as read, but also archive emails they wish to archive.  Full project description and overview, along with all the project requirements are available in the README.md file in this project's repo on GitHub.

This project was made with Django on the backend, SQLite for the database, and HTML, CSS, and vanilla JS on the frontend. For styling, Bootstrap is also used.
        `
    },
    {
        slug: 'django-commerce',
        name: 'Commerce',
        tech: 'Django',
        image: '/images/django/commerce.jpg',
        youtube: 'https://youtu.be/TMxs9M-gdhU',
        github: 'https://github.com/radanjovic/django-commerce',
        description: `
Commerce is a project no.2 for the CS50w course - Programming with Python and JavaScript by HarvardX. This project consists of an e-commerce-like auctions website, with basic functionality for that type of site: Logged in users can create listings (with images, price, description, etc.) of items they would like to sell, see all active listings, browse listings for specific categories, see details for each available listing with the possibility to bid and comment on said listings, along with the possibility to add listings to their watchlist. Finally, users that created listings can end the auction, upon which the winner (highest bid) will be declared and notified upon visiting that listing. Full project description and overview, along with all the project requirements are available in the README.md file in this project's repo on GitHub.

This project was made with Django on the backend, SQLite for the database, and HTML, CSS, and vanilla JS on the frontend. For styling, Bootstrap is also used.
        `
    },
    {
        slug: 'django-wiki',
        name: 'Wiki',
        tech: 'Django',
        image: '/images/django/wiki.png',
        youtube: 'https://youtu.be/ughgc2vQQ94',
        github: 'https://github.com/radanjovic/django-wiki',
        description: `
Wiki is a project no.1 for the CS50w course - Programming with Python and JavaScript by HarvardX. This project consists of a Wikipedia-like web app, where users can browse all entries, and view each entry by typing its title in the URL (or by following a link to it). Users can also read random articles, but also add articles of their own, by creating markdown texts that will be parsed into Html. Finally, users can modify (edit) existing entries. Full project description and overview, along with all the project requirements are available in the README.md file in this project's repo on GitHub.

This project was made with Django on the backend, SQLite for the database, and HTML and CSS on the frontend. For styling, Bootstrap is also used.
        `
    },
];

export const miniProjects = [
    {
        slug: 'mini-py-finance',
        name: 'Finance',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/tree/main/python/finance',
        description: 'Simple finance app made with Flask for the purpose of passing CS50x programming course by Harvard. This app uses external finance API to get data about particular stocks, and allows users to browse, buy and sell stocks, while also remembering their history and tracking their expenses (to make sure that users do not spend more than the allocated 10.000$).'
    },
    {
        slug: 'mini-py-birthdays',
        name: 'Birthdays',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/tree/main/python/birthdays',
        description: 'Simple Flask web app that tracks friends birthdays and uses SQLite to store them.'
    },
    {
        slug: 'mini-py-dna',
        name: 'DNA',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/tree/main/python/dna',
        description: 'A simple program that takes database and dna sequence as arguments, and identifies person based on their dna sequence'
    },
    {
        slug: 'mini-py-tournament',
        name: 'Tournament',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/tree/main/python/tournament',
        description: 'A simple program that calculates probability of a team winning FIFA World Cup, by running 1000 simulated tournaments.'
    },
    {
        slug: 'mini-py-readability',
        name: 'Readability',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/python/readability.py',
        description: 'A program that computes the approximate grade level needed to comprehend some text, in accordance to the Coleman-Liau formula'
    },
    {
        slug: 'mini-py-number-guessing-game',
        name: 'Number Guessing Game',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/python/number-guessing.py',
        description: 'A simple program that picks one random 1-100 number and lets user guess it. User has 5 tries, and with each try - they get one random clue about the number.'
    },
    {
        slug: 'mini-py-paper-rock-scissors',
        name: 'Paper Rock Scissors',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/python/paper-rock-scissors.py',
        description: 'A simple paper, rock scissors game in which user can pick one of them and play against the computer.'
    },
    {
        slug: 'mini-py-cash-register',
        name: 'Cash Register',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/python/cash.py',
        description: 'A program that calculates the minimum number of coins needed to return change to user. User types in the amount of money and program returns the minimum number of coins needed for a change.'
    },
    {
        slug: 'mini-py-fizbuz',
        name: 'FizBuzz Challenge',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/python/fizbuz.py',
        description: 'A few solutions for a popular fizbuz challenge, including the most efficient one. Fizbuz challenge consists of creating an algorithm that will count up to some number and create an array of all the numbers, but will replace numbers dividable with 3 with Fiz, numbers dividable with 5 with Buz, and numbers dividable with both 3 and 5 with FizBuz.'
    },
    {
        slug: 'mini-py-bubble-sort',
        name: 'Bubble Sort',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/python/bubble-sort.py',
        description: 'A simple python bubble sorting algorithm.'
    },
    {
        slug: 'mini-py-insertion-sort',
        name: 'Insertion Sort',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/python/insertion-sort.py',
        description: 'A simple python insertion sorting algorithm.'
    },
    {
        slug: 'mini-py-selection-sort',
        name: 'Selection Sort',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/python/selection-sort.py',
        description: 'A simple python selection sorting algorithm.'
    },
    {
        slug: 'mini-py-youtube-downloader',
        name: 'YouTube Downloader',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/python/youtube-downloader.py',
        description: 'A simple YT downloader that asks user for input (url and whether user wants audio or video file) and saves downloaded file to current directory.'
    },
    {
        slug: 'mini-py-mario',
        name: 'Mario Pyramid',
        tech: 'Python',
        image: '/images/mini/python.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/python/mario.py',
        description: 'A program that prints out a double half-pyramid of a specified height just like in Mario game.'
    },


    {
        slug: 'mini-js-caesars-cipher',
        name: 'Caesars Cipher',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/caesars-cipher.js',
        description: 'Two versions of caesars ciphers - first using rot13, and assuming that all the letters are uppercase (Free Code Camp test), and the other one that takes any number (up to 26) as input, along with a string that can be both uppercase and lowercase, and returns reversed string',
    },
    {
        slug: 'mini-js-cash-register',
        name: 'Cash Register',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/cash-register.js',
        description: 'A cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer as the third argument, calculates change, and returns: insufficient funds - if the value of cash-in-drawer is lower than the value of change due, closed - if they are the same, and open and change - if change due is lower, along with displaying the change due in coins and bills, sorted in highest to lowest order',
    },
    {
        slug: 'mini-js-roman-numeral-converter',
        name: 'Roman Numeral Converter',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/roman-numeral-converter.js',
        description: 'A simple function that takes number and converts it into Roman Numeral',
    },
    {
        slug: 'mini-js-palindrome-checker',
        name: 'Palindrome Checker',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/palindrome-checker.js',
        description: 'A simple function that checks if given string (word or sentence) is a palindrome, in which case it returns true, otherwise it returns false. A palindrome is a word or sentence that is spelled the same way both forward and backward, ignoring punctuation, case, and spelling.',
    },
    {
        slug: 'mini-js-orbital-period',
        name: 'Calculate Orbital Period',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/calculate-orbital-period.js',
        description: 'Function that takes array as input (which contains average altitude), and which returns new array with calculated orbital period for the given space body. ',
    },
    {
        slug: 'mini-js-counting-cards',
        name: 'BlackJack Cards Counter',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/counting-cards.js',
        description: 'A function that simulates counting cards in a game of BlackJack.',
    },
    {
        slug: 'mini-js-sum-all-primes',
        name: 'Sum All Primes',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/sum-of-all-primes.js',
        description: 'Function that takes some integer as input and returns sum of all prime numbers that are less than or equal to num. Prime numbers are numbers divisible only by 1 and themselves.',
    },
    {
        slug: 'mini-js-sum-all-odd-fibonacci-numbers',
        name: 'Sum All Odd Fibonacci Numbers',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/sum-of-all-odd-fibonacci-numbers.js',
        description: 'Function that takes some positiv integer as input, and returns the sum of all odd fibonacci numbers that are less than or equal to that number.',
    },
    {
        slug: 'mini-js-smallest-common-multiple',
        name: 'Smallest Common Multiple',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/smallest-common-multiple.js',
        description: 'Function that takes array of 2 number as input (not in order) and that finds the smallest common multiple for those numbers.',
    },
    {
        slug: 'mini-js-updating-records',
        name: 'Updating Records',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/updating-records.js',
        description: 'Function that can take a few inputs, and that based on those inputs updates records collection.',
    },
    {
        slug: 'mini-js-map-replace-filter',
        name: 'Custom JS ES6 Functions',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/myMap-myReplace-myFilter-custom-functions.js',
        description: 'For better understanding what each of them does, it is a good practice to re-create map, replace and filter JS ES6 functions. And that is exactly what is in this file.',
    },
    {
        slug: 'mini-js-array-of-uniques',
        name: 'Array of Uniques',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/array-of-uniques.js',
        description: 'Function that takes multiple arrguments (which are arrays), creates a new array from every element of each of them (without) duplications, and returns that new array, sorted in order of appearance.',
    },
    {
        slug: 'mini-js-add-together',
        name: 'Add together (Curried)',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/add-together.js',
        description: 'Function that sums two arguments together, but if only one argument is provided, then returns a function that expects one argument and returns the sum (curried function).',
    },
    {
        slug: 'mini-js-more-projects',
        name: 'More Mini Projects',
        tech: 'JS',
        image: '/images/mini/js.jpg',
        github: 'https://github.com/radanjovic/MINI-PROJECTS/blob/main/javascript/more-mini-projects.js',
        description: 'A big collection of small functions and programs written in JS, most of which are from Free Code Camp challenges.',
    },

]

export const certificates = [
    {
        name: 'CS50x: Introduction to Computer Science',
        group: 'Harvard',
        issuer: 'HarvardX (through edX - online learning platform)',
        image: '/images/cert/cs50x.jpg',
        link: 'https://courses.edx.org/certificates/11697543d14341b5a97589a8dcddabea',
        tech: 'C, HTML, CSS, JavaScript, Python, SQL',
        description: `
CS50x is Harvard's course that gives students an introduction to the intellectual enterprises of computer science and the art of programming. This course teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web programming. Languages include C, Python, and SQL plus HTML, CSS, and JavaScript. Problem sets required by the course are inspired by the arts, humanities, social sciences, and sciences, and the course culminates in a final project.

To complete this course and receive a certificate, students must submit and pass ten problem sets, ten labs, and one final project. Tests are automated.
        `
    },
    {
        name: 'CS50w: Web Programming with Python and JavaScript',
        group: 'Harvard',
        issuer: 'HarvardX (through edX - online learning platform)',
        image: '/images/cert/cs50w.jpg',
        link: 'https://courses.edx.org/certificates/4abaca623859444780b9da84b3e2c95b',
        tech: 'HTML, CSS, JavaScript, Python, SQL, Git, Django, React, Bootstrap, APIs',
        description: `
CS50w is Harvard's advanced course that picks up where CS50x leaves off, diving more deeply into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap. Topics include database design, scalability, security, and user experience. Through hands-on projects, students learn to write and use APIs, create interactive UIs, and leverage cloud services like GitHub. By semester’s end, students emerge with knowledge and experience in principles, languages, and tools that empower them to design and deploy applications on the Internet. Taking this course requires previous programming knowledge and experience (i.e. at least passing CS50x).

To complete this course and receive a certificate, students must submit and pass a total of six projects and one final project, which are graded by humans employed by Harvard and CS50.
        `
    },
    {
        name: 'Responsive Web Design',
        group: 'FCC',
        issuer: 'Free Code Camp',
        image: '/images/cert/fcc-rwd.jpg',
        link: 'https://www.freecodecamp.org/certification/radanjovic/responsive-web-design',
        tech: 'HTML, CSS, Accessibility, Responsive Design',
        description: `
Responsive Web Design course and Certification, offered by Free Code Camp, teaches students languages that developers use to build webpages: HTML for content, and CSS for style and design. This course teaches responsive web design, by teaching CSS Grid, CSS Flexbox, and media queries, on top of basic HTML and CSS. This course represents approximately 300 hours of coursework.

To complete this course and receive a certificate, students must submit and pass a total of five projects, that showcase skills taught in the course. Tests are automatic. In order to learn during the course, students also work on (and should pass) dozens of tests in multiple different course sections.
        `
    },
    {
        name: 'JavaScript Algorithms and Data Structures',
        group: 'FCC',
        issuer: 'Free Code Camp',
        image: '/images/cert/fcc-js.png',
        link: 'https://www.freecodecamp.org/certification/radanjovic/javascript-algorithms-and-data-structures',
        tech: 'JavaScript, Algorithms, Data Structures, Object Oriented Programming, Functional Programming',
        description: `
JavaScript Algorithms and Data Structures course and Certification, offered by Free Code Camp, teaches students basic and advanced features of JavaScript - the language of the web. While HTML and CSS control the content and style, JavaScript is used to make pages interactive. This course teaches students the fundamentals of JavaScript, including variables, arrays, objects, loops, functions, algorithms, and two of the most important programming styles or paradigms: Object-Oriented Programming(OOP) and Functional Programming (FP). This course represents approximately 300 hours of coursework.

To complete this course and receive a certificate, students must submit and pass a total of five projects, that showcase skills taught in the course. Tests are automatic. In order to learn during the course, students also work on (and should pass) hundreds of tests in multiple different course sections.
        `
    },
    {
        name: 'Front End Development Libraries',
        group: 'FCC',
        issuer: 'Free Code Camp',
        image: '/images/cert/fcc-fe.png',
        link: 'https://www.freecodecamp.org/certification/radanjovic/front-end-development-libraries',
        tech: 'Bootstrap, Sass, jQuery, React, Redux',
        description: `
Front End Development Libraries course and Certification, offered by Free Code Camp, teaches students about the most popular and relevant front-end development libraries, like Bootstrap, Sass, jQuery, and React. This course teaches students to quickly style sites with Bootstrap, add logic to CSS styles and extend them with Sass, how to apply jQuery to make writing JavaScrip code easier, and how to create powerful and beautiful Single Page Applications (SPAs) with React and Redux. This course represents approximately 300 hours of coursework.

To complete this course and receive a certificate, students must submit and pass a total of five projects, that showcase skills taught in the course. Tests are automatic. In order to learn during the course, students also work on (and should pass) dozens of tests in multiple different course sections.
        `
    },
    {
        name: 'Back End Development and APIs',
        group: 'FCC',
        issuer: 'Free Code Camp',
        image: '/images/cert/fcc-be.png',
        link: 'https://www.freecodecamp.org/certification/radanjovic/back-end-development-and-apis',
        tech: 'JavaScript, Node.js, npm, Express.js, MongoDB, Mongoose, APIs',
        description: `
Back End Development and APIs course and Certification, offered by Free Code Camp, teaches students about backend web development and API development with JavaScript (Node.js). This course teaches building backend apps with Node.js, npm (Node Package Manager), and Express web framework, and database development with MongoDB and Mongoose library. This course represents approximately 300 hours of coursework.

To complete this course and receive a certificate, students must submit and pass a total of five projects, that showcase skills taught in the course. Tests are automatic. In order to learn during the course, students also work on (and should pass) dozens of tests in multiple different course sections.
        `
    },
    {
        name: 'The Complete Web Development Bootcamp',
        group: 'Udemy',
        issuer: 'London App Brewery (through Udemy - online learning platform)',
        image: '/images/cert/webdev.jpg',
        link: 'https://www.udemy.com/certificate/UC-e78afea7-dcda-483d-8f3b-ef716e5a14ee/',
        tech: 'HTML, CSS, Bootstrap, JavaScript, jQuery, Git, Node.js, Express.js, ejs, REST APIs, MongoDB, Mongoose, React',
        description: `
The Complete Web Development Bootcamp, taught by wonderful dr. Angela Yu from London App Brewery, is a course designed to be the only course one needs to learn full-stack web development, from scratch. In this course, students learn, from the ground up, about all the technologies that allow full-stack web development with JavaScript - mainly HTML, CSS, JavaScript, Node.js, and React. Additionally, this course teaches about database design with MongoDB and best practices for REST API architecture. On top of this, this course teaches about many other popular libraries used in full-stack development - mainly Boostrap, jQuery, and Express.js.

To complete this course and receive a certificate, students must watch all the lectures in the course, pass automated tests created by instructors along the way, and, optionally, code along with the instructor, to familiarize themselves further with web development.
        `
    },
    {
        name: 'React - The Complete Guide',
        group: 'Udemy',
        issuer: 'Academind (through Udemy - online learning platform)',
        image: '/images/cert/react.jpg',
        link: 'https://www.udemy.com/certificate/UC-285a04ad-e1a4-486f-8435-183f9a9a2a91/',
        tech: 'React, Functional React (Hooks), React Router, Redux, JavaScript ES6, React Animations, React Testing, React with TypeScript',
        description: `
React - The Complete Guide, taught by amazing Maximilian Schwarzmueller and his Academind, is a course on the newest React core features and advanced concepts. This course teaches functional React (with an overlook at Class-Based React) from the ground up - from all the core basics to advanced topics, through theory, a bunch of examples and demos, and many assignments and exercises.

To complete this course and receive a certificate, students must watch all the lectures in the course, pass automated tests created by instructors along the way, and, optionally, code along with the instructor, to familiarize themselves further with web development.
        `
    },
    {
        name: 'Next.js - The Complete Guide',
        group: 'Udemy',
        issuer: 'Academind (through Udemy - online learning platform)',
        image: '/images/cert/next.jpg',
        link: 'https://www.udemy.com/certificate/UC-d0a446bd-e702-4527-8850-d3383559ede9/',
        tech: 'Next.js, File-based Routing, Static Generation, Incremental Static Generation, Server-side Rendering, Next.js API implementation, NextAuth',
        description: `
Next.js - The Complete Guide, taught by amazing Maximilian Schwarzmueller and his Academind, is a course on the most popular production framework for React -Next.js. This course teaches Next.js and its core features(file-based routing, static generation and SEO optimization, and full-stack API development) from the ground up, through theory, a bunch of examples and demos, and many assignments and exercises.

To complete this course and receive a certificate, students must watch all the lectures in the course, pass automated tests created by instructors along the way, and, optionally, code along with the instructor, to familiarize themselves further with web development.
        `
    },
    {
        name: 'Python for Everybody - Specialization',
        group: 'Coursera',
        issuer: 'The University of Michigan (through Coursera - online learning platform)',
        image: '/images/cert/python.jpg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/MKDE8SJARLX4',
        tech: 'Python, Data Structures, Web Data Manipulation with Python, Databases and Python, Retrieving, Processing and Visualizing Data with Python',
        description: `
Python for Everybody is a course offered by the University of Michigan, through the online learning platform Coursera, that teaches students the basics of programming by teaching them basics of Python programming language. The course is taught by dr. Charles (Chuck) Severence, a legend in the field. This course teaches students about Python (and programming) fundamentals (variables, loops, functions, data structures), and about working with Python and Data (databases, extraction, visualization, etc.).

To complete this course and receive a certificate, students must watch all the lectures in the course, and pass all the automated tests and quizzes  created by instructors. Students are also encouraged to code along with the instructors.
        `
    },
    {
        name: 'Google IT Support',
        group: 'Coursera',
        issuer: 'Google (through Coursera - online learning platform)',
        image: '/images/cert/google.jpg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/RWCKDGCQDNCM',
        tech: 'Technical Support Fundamentals, Computer Networking, Operating Systems, System Administration, IT Infrastructure Services, IT Security',
        description: `
Google IT Support certification consists of 5 different courses offered by Google employees, that teach students about different fields of IT support. Course content is developed by Google and includes hands-on, practice-based lectures and assessments designed to provide entry foot into the world of IT and IT support.

To complete this course and receive a certificate, students must watch all the lectures in the course, and pass all the automated tests and quizzes  created by instructors.
        `
    },
];

