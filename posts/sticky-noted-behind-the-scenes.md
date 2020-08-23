---
title: Behind the scenes of StickyNoted
date: "2020-08-22"
image: "/images/new.jpg"
---

I've been using note-taking app like Google Keep, and enjoy it quite well until
one day I'm thinking if it can support markdown syntax so that I can migrate my GitHub gists and
code snippets there. So then I thought: What if I make my own note-taking app since it's also been a while
that I made a product.

## Prototyping

Before I setup the project on my machine, usually I do prototyping on [StackBlitz](https://stackblitz.com) for faster iteration. When I feel ok with the MVP, then I begin to setup the project on my machine.

<img src="/images/mvp.png" />

## Tech Stack

Nowadays I prefer [React](https://reactjs.org/) for the frontend and [Firebase](https://firebase.google.com/) for the backend (it's **free**!).

I have created [cra-hackathon](https://github.com/antonybudianto/cra-hackathon) repo just so that I can clone and start developing the MVP right away, it already includes [Create React App](https://create-react-app.dev/) base, Firebase setup, Sign-in and Landing pages, React hooks, etc.

## MVP Development

Initially, I only focus on **one** thing: Users can create and edit note with simple markdown.
Styling, layout, or storage mechanism can come later.

So in this case I need to look things in open-source space that can satisfies the requirement.

I used some of open-source libraries for this project:

- Drag and Drop: https://github.com/atlassian/react-beautiful-dnd
- Popup: https://www.npmjs.com/package/reactjs-popup
- Markdown: https://github.com/rexxars/react-markdown
- Color: https://casesandberg.github.io/react-color

I already used some of them during the prototyping phase and added some later during the MVP development.

Next, I need to think how user will add, edit and delete the note. The UI is really simple just for MVP sake.

Finally, the MVP is done in less than a day, but the fun part is not over yet!

<img src="/images/mvp2.jpg" />

## Beta Development

Before I can launch to the public and call it **beta**, I had decided on some action items (in priority order):

- User can load and store the notes on Firestore
- [Progressive Web Apps](https://create-react-app.dev/docs/making-a-progressive-web-app/): Works offline
- Responsive layout based on media screen
- Styling and polishing

Load and store the notes on Firestore was pretty easy though, but
**offline mode** is not that simple and very challenging:

- [CRA](http://create-react-app.dev/) already provided Service Worker that will caches your assets for offline usage, but the app is **not offline ready** by default
- You need to know which part of the feature that's **really possible** for user to use when offline
- You need to exclusively handle the data fetch and load data from cache when offline
  - Use `try-catch` trick with `async-await`
  - This cache is possible with `localStorage`

In this case, I think note-editing feature should be possible for offline mode because users should be able to access and edit the note even offline. So I tweak stuff so when
offline, I can just **fallback** to last edited notes on cache. After online, we can do simple check last-edited on local with server, if local timestamp is newer, then we can save it to server.

For styling and responsive layout, I did many iterations until I feel satisfied so it takes a bit of time.
I decided to use max 4 columns for large screen, 2 columns for tablet screen, and 1 column for phones. A little inspiration from Google Keep of course 😁.

To note, CRA already provided basic PWA setup, so your web should be installable on Android and iOS (Safari) with no issue (Just "add to homescreen" on the browser).

> **Known issue**: Chrome on iOS doesn't support PWA or Service worker.

## Beta launch

Finally, it's time for beta launch!

I decided to deploy it to [Netlify](https://www.netlify.com/) because it's free and it can manage your domain SSL for free. It's deployed under https://stickynoted.xyz domain.

I also post on [ProductHunt](https://www.producthunt.com/posts/stickynoted) for better discovery and I'm very happy that it got featured!

<img src="/images/ph.jpg" />

## Road to Production

I did many refactoring during post-beta launch to support Workspaces which enables private mode and public sharing workspace.

I missed SEO stuff so I fixed all the [essential meta tags](https://css-tricks.com/essential-meta-tags-social-media/).

I also missed to lazy-load stuff but this can be done fast with [@loadable/components](https://github.com/gregberge/loadable-components). Anything that's not shown initially should be lazy-loaded.

Since CRA is set so that all pages can be opened when offline, some pages functionality doesn't work as intended like updating username, deleting workspace, etc. I put some offline notice to the feature so that user's **aware** that they're offline and set their **expectation** for things might not work as expected.

<img src="/images/off1.jpg" height="150" />
<img src="/images/off2.jpg" height="300" />

## Lesson learned

- Prototyping can be fast using [Stackblitz](https://stackblitz.com) (trying 3rd party libraties)
- [Firebase](https://firebase.google.com) is good for MVP (Auth, Database, Storage, and more)
- [Netlify](https://www.netlify.com/) is good for simple deployment and domain management
- PWA can improve mobile user engagements
- Offline mode is cool but focus on most impactful feature and where it makes sense
- Let user know when they're offline
- Product discovery is very important (think SEO, social media links)

This is StickyNoted today:

<img src="/images/new.jpg" />

> Try [StickyNoted here](https://stickynoted.xyz/). If you're on ProductHunt, you can vote [here](https://www.producthunt.com/posts/stickynoted).

---

Thanks for reading this far, and I hope it's insightful for you, see you on the next blog.
