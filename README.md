# Experiences Application
The goal of this project is to inspire guests, while giving users the ability to perform simple / complex querying of our maintained hidden gems.

This application should be run on an iPad in the lounge, or displayed on large televisions. Staff may also use this to search hidden gems they personally recommend if asked by guests.

My general solution to this, with the limitation of it being a days work, is as follows.

Users are shown a screen with nearby attractions, all within 15 minutes of this property.

Users see a reduced view of a few options for:
* Food and drink
* Shopping
* Culture

Users may scroll sideways to see more options, may click for more details, may filter by some simple and high-value tags, may type in simple search queries.

Bonuses:
[] Set up automated deployments 
[] Write a demo test 
[x] Use Tailwind 

Given more time I would:
* Whitelabel this for different themes, seasons, properties etc.
* Setup a component library with Storybook, and automate snapshot testing with Chromatic.
* Project management on GitHub Projects and Issues
* Less greedy use of API resources
* Mandatory test coverage protected with pre-commit hooks. 
* ...


## Quickstart
Node version - 24.6.0
Demo - TODO

### First-time setup
You will need node and npm.

First run:
```
npm install
```

Then run:
```
npm run dev
```
## Diary

So ending the pairing session with the team, I was stuck on a CORS issue. It feels like that happens about once per project, and I'm aware my solution for localhost may not work in a production environment.

Ideally I would deploy this application on the same domain as our APIs, or in a larger version of this project I would use Next.js's API router and wrap these external calls in a proxy route for cleanliness. 

### Demo deployment

I'm going to briefly create a deployment. I think for accountability it's always good to deploy as fast as possible and make sure all stakeholders know links where they can see project management and deliverables without intervening on the team.

In a larger project, I'd probably use Google Cloud Storage for a simple frontend like this, and a CDN if necessary though most of that seems sorted by the API.

For now, I want a quick and low setup deployment where my API calls continue to work. I like to use Netlify + Vercel for small and free deployments of frontends + APIs.