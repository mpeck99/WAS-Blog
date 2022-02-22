---
title: WCAG Introduction - Perceivable 
date: 2022-02-21 
intro: Web Content Accessibility Guidelines (WCAG) is an international standard that covers a wide range of recommendations for making web content more accessible.
tags: ['WAS', 'WCAG']
---

Web Content Accessibility Guidelines (WCAG) is an international standard that covers a wide range of recommendations for making web content more accessible. Developed by the World Wide Web Consortium (W3C) through cooperation with individuals and organizations around the world. Its goal is to help provide a single, shared standard for web content of accessibility that will need the needs of: individuals, organizations, and governments internationally. 

The WCAG document is organized into four principles that then have 13 guidelines within them. Under each guideline there then are testable success criteria with levels of conformance. The three conformance levels are as follows: 
* A - Lowest
* AA - What most laws and policies focus/aim to achieve
* AAA - Highest

Throughout this document I will break down the 4 principles, the guidelines that live under each principles and a description of the success criteria. 

## WCAG Principles (P.O.U.R)
* Perceivable: All non-text content (Images, ASCII art, emoticons, leetspeak, images representing text) is accessible through the means of text alternatives. 
* Operable: All user interface (UI) components and navigation must be operable by the user. 
* Understandable: All information and the operation of UI components must be understandable by the user. 
* Robust: Content must be robust enough so that it can be interpreted by a wide variety of user agents, including assistive technologies. 

### Perceivable 
The goal of this principle to to make sure all non-text content is accessible through the use of text-alternatives. Text alternatives provide a primary way to make information accessible b3because it can be rendered through many different sensory modalities3s (auditory, visual, tactile) to meet the needs of the user. This principle has four guidelines thats that fall under it: 
* 1.1 Text Alternatives
* 1.2 Time-Based Media
* 1.3 Adaptable
* 1.4 Distinguishable

#### 1.1 Text Alternatives
This guideline falls under the level A conformance and states that all content should be presented to the users as a text alternative except for hte following: 
* Controls/Inputs
    * If its a control or accepts user inputs then it has a name that describes it purpose
* Time-based media
    * If its a time-based media, then text alternatives at least provide a descriptive identification of the non-text content
* Test
    * If the content is a text or an exercise then it wouldn't be valid to have text alternatives to help describe the text that is presented. They should at least describe the identification of what the test is
* Sensory 
    * If the content is intended to create a specific sensory experience then the text alternative needs to at least give a description of the content
* CAPTCHA
    * Text alternatives should identify and describe the purpose of the content, since it would defeat its purpose if it said exactly what the CAPTCHA says
* Decoration / Formatting / Invisible
    * If the content is for pure decoration and only used for visually formatting/is not presented to the users it can be implemented in a way to be ignored by assistive technologies (aria-hidden)

When trying to decide what your text alternatives should be here are some questions WCAG recommends asking yourself: 
* Why is this non-text content here?
* What information is it presenting?
* What purpose does it fulfill?
* If I could not use non-text content, what words would I use to convey the same function/information?

#### Success Criteria 1.1.1: Non-text Content
This guideline unlike the others only has one success criteria underneath it: 1.1.1 Non-text Content. This criteria is set at a level A conformance and its goal is to present all non-text content to users as a text alternative that serves an equivalent purpose. 

##### Benefits to 1.1.1: Non-text Content
By providing a text alternative for non-text content it helps benefit blind or low-vision users who may use assistive technology acces sthe content by allowing it to be read as text aloud, presented to them visually, or converted to braille. It also can benefit the deaf or hard of hearing who have a hard time understanding audio by giving them a means to read the audio content. Sometimes it may also help those who have difficulty understanding  meanings of photos, drawing, charts, or anything that is considered non-text content. 