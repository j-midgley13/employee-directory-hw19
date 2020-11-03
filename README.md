# Employee Directory Homework 19  

## Introduction  

This assignment was given to create a website that can be used to track a budget whether the site is online or offline. This process uses a service worker to handle those requests and put them into the database once they are back online.

## Table of Contents:  
* [Objectives](#Objectives)
* [Process](#Process)
* [Challenges](#Challenges)
* [Summary](#Summary)
* [Sites](#Sites)
* [Screenshots](#Screenshots)

## Objectives  

```md
The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

Offline Functionality:

  * Enter deposits offline

  * Enter expenses offline

When brought back online:

  * Offline entries should be added to tracker.
```

## Process  

* I first copied the homework into my own repository for the assignment.  
* I then completed npm i installation into my repository.  
* Much of the code was given in the assignment, I was responsible for adding the service-worker.js, manifest.json, and db.js.  
* I also made changes to index.js, index.html, api.js, and package.json in order to get service worker to work.  
* I first started with the service-worker.js to add eventListeners to cache necessary pages and data.  
* I then updated api.js to have correct routing.  
* I then added the code necessary to connect to Heroku for app deployment.  

## Challenges  

This assignment was tough in its own way. It combined retrofitting given code to fit into a service worker to complete the task. I had plenty of help from fellow students and of course google, but I leaned heavily on previous week's mini-project to get me through. IndexedDB was new to me as we didn't cover that in class. Heroku deployment was another issue as it worked locally but not on heroku-deployed site.    

## Summary  

This assignment was fun and challenging! It was really neat to see how websites can function offline. It keeps the user engaged at all times, not just times they have internet access. That is big for many businesses. I liked the challenge of working with given code to fit a task into the project.  

## Sites  

* [Link to repository on GitHub](https://github.com/j-midgley13/budget-tracker-PWA-hw18)  

* [Link to deployed Heroku Website](https://immense-taiga-97479.herokuapp.com/)  

## Screenshots  

![screenshot](./extras/offline-budget.png)  