---
title: Accessibility fundamentals - Motor, Speech, Cognitive & Reading disabilities
date: 2022-02-16
intro: As I truck through the accessibility fundamentals course by Deque I have started to learn more and more about various disabilities and the ways these types of users may navigate and interpret our sites and applications. 
tags: ['disabilities', 'fundamentals']
---

As I truck through the accessibility fundamentals course by Deque I have started to learn more and more about various disabilities and the ways these types of users may navigate and interpret our sites and applications. 

## Motor Disabilities
Motor disabilities can refer from a range of physical experiences such as: 
* Temporary inability to use a single hand from an injury
* Difficulty using both hands
* Having little to no control over ones limbs

When designing sites and applications for motor disabilities we need to keep in mind the following: 
* <strong>All functionality must be available using only the keyboard.</strong> <br>
    Everything that is done with a mouse should be able to be done with a keyboard since people with motor disabilities may not have the fine motor skills to use a mouse. 
* <strong>Links, buttons and controls MUST have a visible :focus state and should have a visible :hover state</strong><br>
    If the focus state is turned off sighted users may have difficulty knowing aware where the keyboard focus is. The default :focus state is acceptable for WCAG guidelines but we can always enhance the CSS to benefit the user.
* <strong>When a session times out, users should be warned before the time expires</strong><br>
    People with motor disabilities may need more time to enter information on a webpage so it is important that we are giving them enough time and options to extend their time. 
* <strong>Provide large click targets</strong><br>
    People who experience tremors or spasms need to have the ability to activate targets on a webpage. By increasing the target area it can help maximize the chance's of accurately selecting a target on a webpage. 

## Speech Disabilities
Speech disabilities are the inability to produce or organize speech sounds and syllables correctly, fluently, and there may also be a total loss of voice. 
### Types of Speech Disabilities
* Stuttering - words may be involuntarily repeated, prolonged, stopped or blocked completely
* Cluttering - rapid speech that is inconsistent in rhythm and lacks syntax or grammar
* Apraxia - the difficulty using muscles for speech production
* Dysarthria - due to brain damage the muscles for speech is impaired causing: slurred or slow speech, mumbling or a hoarse/breathy voice
* Speech and sound disorders 
    * Articulation disorders - difficulty producing speech sounds
    * Phonemic disorders - difficulty distinguishing speech sounds in language
* Non-vocal - inability to produce speech sounds at all
To help design things with speech disabilities in mind we must not depend on any voice inputs in mobile apps, widgets, games, etc. 

## Cognitive Disabilities
There are many different type of cognitive disabilities with no real easy way to describe them. They can occur from a variety reasons such as birth, developmental conditions, traumatic brain injury, infections, chemical imbalances or conditions gained later in life. To help design for a variety of cognitive disabilities we need to try and implement the following: 
* Keeping the user interface as simple as possible. <br>
    This includes keeping the content simple, video/audio short, limit the number of choices on the screen, providing help options, and designing for eas of use. Those who have a lower comprehension from a cognitive disability have a better web experience if we keep the interface simple and easy to use and understand. Once we start putting to many options or very complex information out there it may be difficult for them to process.
* To help those with memory loss retain information across screens and within a path to help them easily use the site. This means by creating a site that has predictability across its pages (same navigation, structure, etc.)
* Reduce or eliminate distractions. Too many distractions on a page may overwhelm users with cognitive disabilities causing them to miss important information. 

## Reading Disabilities
Users with cognitive disabilities also may have issues reading. Some may read a a lower level then their peers, while some may not be able to read at all. For some users it may be helpful to include illustrations or audio to help supplement the text. 
