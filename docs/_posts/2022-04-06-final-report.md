---
layout: post
title: "Compte rendu final - repartiition des taches"
tags: ["houseportal", "tasks", "final"]
category: "Reports"
date: 2022-04-06 00:00:00 -0000
---


# HousePortal - Compte rendu final - répartition des taches

## Sommaire

- [HousePortal - Compte rendu final - répartition des taches](#houseportal---compte-rendu-final---répartition-des-taches)
  - [Sommaire](#sommaire)
  - [Introduction](#introduction)
  - [Répartition](#répartition)
  - [Détail des tâches](#détail-des-tâches)
    - [Backend](#backend)
    - [Frontend](#frontend)

## Introduction

Ce compte rendu a pour but de résumer les tâches que nous avons réalisées durant notre projet, ainsi que les choix de répartitions effectués. Pour plus de détalis concernant les contributions de chaque membre de l'équipe, l'historique des commits disponible sur [GitHub](https://www.github.com/photonsquid/houseportal) s'avèrera probablement plus pertinent.  

*Disclaimer: de nombreux commits ont été réalisés dans le cadre de sessions de pair programming, c'est pourquoi la majorité d'entre eux ont été réalisés par deux comptes sur les quatre ayant accès au dépot.*

## Répartition

Nous avons fait le choix (assez naturel dans le cadre de la construction d'une application web) de créer deux sous-équipes, la première chargée du développement du front-end, la seconde du développement du back-end:

| HousePortal Front-end                  | HousePortal Back-end            |
| -------------------------------------- | ------------------------------- |
| Ying Liu                               | Sébastien Pont (lead developer) |
| Philippe Négrel-Jerzy (lead developer) | Cyprien Arnold                  |

## Détail des tâches

Les users stories ainsi que les features qui leurs sont associées sont détaillées sur le Kanban ("project" sur GitHub) disponible à [cette adresse](https://www.github.com/photonsquid/projects/4/views/2). Chaque issue ("ticket" en français) correspond ainsi à une user story, et contient une liste de tâches cochables (features) disposées suivant le format suivant:

> **User story**
> Description de la user story.
>
> - [ ] *feature 1*
> - [ ] *feature 2*
> - [ ] *feature 3*

Le travail a été réparti de la façon la plus équitable possible, en fonction de la disponibilité des membres de l'équipe.

### Backend

- [x] Dockerize wildfly jakarta ee app [**Sébastien**]

Dockerize all the backend structure in order to make it easier to deploy and manage.

- [x] Change from Gradle to Maven [**Sébastien**]

Implement Maven file structure and config for WildFly.

- [x] Set up database [**Cyprien**]

Create database (users, devices, settings).

- [x] Implement log in with mail address [**Cyprien**]

Create model and controller for log in endpoint (security, check for user in database, log IP address, return 200 OK if user exists, return error else)

- [x] Add hot-reload to WildFly for better development [**Sébastien**]

Use wildfly-jar--maven-plugin with dev mode.

- [x] Seed an MVC structure for backend [**Cyprien**]

Try to respect conventions.

- [x] Contain WildFly into a docker image. [**Sébastien**]

Set up a docker environment.

- [x] Fit CI/CD for the new backend version [**Sébastien**]

Make a new CI/CD pipeline.

- [x] Create backend structure, add db connection, implement login endpoint [**Sébastien**]

Resolves #2, resolves #3, resolves #4, resolves #5, resolves #6, resolves #7, resolves #8, resolves #11.

- [x] Implement register endpoint [**Cyprien**]

Register with email, add user in db, confirm email

- [ ] Implement forgot password endpoint

### Frontend

- [x] Setup initial build configuration [**Philippe**]

This pull request adds a nice welcome screen with the photonsquid logo on it, and a nearly functional CI/CD workflow (the CD still needs to be finished later, as we haven't properly defined the deployment infrastructure yet).

- [x] Dockerize the react app [**Philippe**]

This pull request's goal is to add a fully functional CI/CD infrastructure, in order to automate the deployment process.

- [x] Add proper readme to the project [**Ying**]

This PR adds an actual readme to the repo, which will be converted into a static website by github pages when merged into the main branch.

- [x] Fix docker CD [**Philippe**]

This PR fixes the docker continuous deployment infrastructure, by setting the port number to "8080" before running the app inside the container.

- [x] improve production image dockerfile [**Philippe**]

This PR temporarily deletes the dev container because of the many issues in-container development brought, and makes the production image lighter by adding the --production tag to the yarn start call inside the dockerfile.

- [x] Implement log in and sign up [**Ying**]

This PR adds the Sign in and Sign up pages, as well as a bare bones dashboard, and lays down most of the routes which will be used during this project.

- [x] Implement basic dashboard [**Ying**]

This PR adds a simple dashboard, which only displays mock data (randomly generated or hard-coded) at the moment, as the backend isn't ready yet.

- [x] IOT device dashboard [**Ying**]

List of active devices, interaction interface for each device type (on/off, color, etc...), multiple views (list/tree)

- [x] User settings [**Philippe**]

Implement user settings page, which allows the user to change his email, password, and other settings.
