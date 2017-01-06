# Told Front

[![npm (scoped)](https://img.shields.io/npm/v/@told/told-front.svg)](https://www.npmjs.com/package/@told/told-front)
[![Build Status](https://travis-ci.org/toldsoftware/told-front.svg?branch=master)](https://travis-ci.org/toldsoftware/told-front)
[![Coverage Status](https://coveralls.io/repos/github/toldsoftware/told-front/badge.svg)](https://coveralls.io/github/toldsoftware/told-front)

Next-gen Typescript UI Framework for Multi-Targetting Platforms with single code base

## Usage

```
npm install @told/told-front --save
```

In Typescript File:

```
import * as M from 'told-front';
import { SOMETHING } from 'told-front';
```

## Features

- Super Condensed Coding Time for Front-End App Development
    - Write an entire SPA in an hour
- Strict Division of Concerns
    - state
    - actions
    - filters
    - elements
    - style
- Automated merging of app concerns into Runtime app
- Multiple platform targets
    - Browsers
    - Native Mobile with NativeScript 
- Quickly build multiple alternative views of the state model and expose actions in various ways
- Single File Deployment for all logic, markup, style, and inlined icons
- Tiny deployment: runtime code is cherry picked specific for target platform to include only neccessities
- Isolated styles will not conflict with host page styles

## When combined with Told-Back full-stack features are enabled

- Action Log based State Tree
    - Every action is serialized and persisted 
    - Reconstruction of the state tree is possible at any point in Time
- App Instance Url Sharing
    - User can share a read-only snapshot of their app state
    - User can share a read-only window of their live app state
    - User can enable actions with share permissions
        - Allow shareholder to execute actions against live state
        - Easily undo shareholder actions
    
## Told-Optimus brings in the power of machine learning for user experience optimization

- Automated UX Optimization
    - Automatically analyze user action logs
    - Define value goals for intended user interaction
