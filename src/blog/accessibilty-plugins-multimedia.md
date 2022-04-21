---
title: How to ensure your multimedia elements (video and audio) are accessible to your users
date: 2022-04-21
intro: Multimedia such as video, audio, objects, and documents can have their own accessibility challenges. There are somethings though we should do to ensure that our media is available and accessible to all types of users. 
tags: ['accessibility', 'alt', 'HTML', 'Video', 'Audio']
---
## Media accessibility methods
- Captions
- Transcripts  
- Audio descriptions 
- Sign language interpretation 

### Captions
Captions are text that is displayed at the bottom of the screen that is synchronized with media content.
### Text Transcripts
Text transcripts are standalone text versions of the media. They allow users who are deaf-blind use refreshable braille device with assistive technologies to read your medias content. They should have: 
- All dialog and narration
- Identify who is speaking
- Make note of any sounds like applause or laughter
- Describe any visual information

By doing all the above it makes sure to provide an equivalent alternative of your content. You can present your transcript on the same page that your video or audio is hosted, link to a separate page, insert it via a popup dialog box, or have it in a completely separate document such as a Microsoft Word document. 

### Audio Descriptions
Is an audio track played simultaneously with the original video. Usually will describe facial expressions or any other visual content that isn't conveyed via audio.

### Sign language interpretation
Involves a person translating the audio into sign-language.

## Third-party plugins or applications
Third-party plugins or applications pose their own unique accessibility challenges such as: 
- Users may not have the plugin or app available
- It could be impractical or impossible to add an HTML alternative depending on the functionality of the plugin or app

If your plugin or application has an accessibility API make sure to take full advantage of it. Here are some software applications that are known to have accessibility APIs
- Microsoft Office
- Acrobat Pro
- Acrobat Reader

## Prerecorded Video and Audio
If you any any prerecorded `<audio>` or `<video>` element you should know that you cannot use an `alt` attribute on them. Ways to make them accessible are:
- Synchronized captions
- Text transcripts
- Audio descriptions
<div class="callout"><p>You must provide a text transcript for any prerecorded audio and video.</p></div>

### Prerecorded video
All prerecorded video must have synchronized captions that: 
- Include all dialog and narration
- Identify who is speaking
- Indicate any important sounds, such as: 
    - Applause
    - Laughter

### Prerecorded audio
You can include synchronized captions to any audio thats prerecorded but most of the time a text transcript will suffice. 

### Live video
All live video that has any dialog/narration must have synchronized captions for your deaf users to be able to access the information it displays. Live captioning requires a stenographer. A stenographer is one who uses a special stenograph machine to type the spoken content into a live text feed that accompanies the video. This machine is similar to a keyboard but it has fewer keys to type in syllables or sounds. 

### Live audio 
Live audio that consists mainly of dialog/narration should have synchronized captions. If your live audio contains music or similar types of sounds these live captions may not be necessary. Having these captions can help for concerts because it allows the deaf community gain a sense of the event. Another way to allow deaf users access to concerts or events is to provide a text transcript or a description of the event after it has ended. Its up to you on how you wish to approach this. 


## Objects
While objects are not as common as they used to be, they still can be used to display content like: 
- Images 
- PDFs
- Videos
- Audio
- And more
If your sites has an `<object>` element you need to make sure it has a text alternative but you cannot simply do it via an `alt` tag. You will need to add the alternative text by using and `aria-label` or an `aria-labelledby`. 

If your alternative text description needs to be more than 150 characters to describe the content accurately you should describe the `<object>` via a long description or by creating an HTML equivalent of all the content (best when its an interactive application).

Now just adding alternative text to your `<object>` wont make the entire thing accessible. It will only inform the user what the object is and what it does, so you need to be sure to follow any other accessibility best practices to ensure that your object is truly accessible.


## Documents
Now when I talk about document accessibility I am refering to these types of documents: 
- Word
- PDF
- EPUB

Now as a general guideline its recommended that if you have any non-HTML content like the formats mentioned above its best to try and provide an HTML version. This is because HTML is one of the most accessible formats out there and its the most appropriate for web content. 
Some reasons why its better to have an HTML formate are: 
- HTML features are quite mature
- Users wont need to download a file
- Users wont have to leave the web browser interface
- User wont have to download or install any extra software to view the file

If you do have any non-HTML content on your page be sure to follow some basic accessibility principles such as: 
- Having meaningful titles
- Good semantic heading structures
- Alternative text for images
- Designate table headers and ensure the data cells are associated with those headers
- Do not rely on color alone to convey information
- Ensure that there is efficient color contrast between the text and the background
- Use highly readable fonts

### PDFS
To ensure that screen readers can access and read a PDF you have to make sure that PDF is *tagged* in a pdf format. Acrobat reader and Acrobat Pro have a feature that can auto-tag a PDF but it still can be imperfect. 
#### How to make a tagged PDF
1. Create the file in the original authoring software
    - Word or indesign
2. Export the document to a PDF format
3. Use Acrobat Pro to make sure the document represents  the accessibility intent of the original document
    - This usually requires some touch up to make sure the document is fully accessible
#### PDF Accessibility Resources
- [W3C PDF Accessibility Techniques](https://www.w3.org/WAI/WCAG21/Techniques/#pdf)

### EPUB
EPUB files are electronic book or eBook formats that are based on the HTML structure. There are many different eBook formats out there but the EPUB format is by far the most accessible. To view or read EPUB files you will have to have an EPUB reader or eBook that accepts the EPUB format.

You can include a variety things inside your EPUB file such as: 
- Images
- Multimedia
- MathML
- Other technologies

PDFs are less flexible when compared to EPUB since they are meant to retain their visual styling and layout. With EPUB readers users can magnify text, change colors, increase contrast and manipulate any styles. 

#### EPUB Accessibility 
To ensure that your EPUB is accessible as possible make sure to make it in the EPUB 3 format. There is also some standards set for EPUB accessibility that you can find at the following urls below: 
- [https://idpf.github.io/a11y-guidelines/](https://idpf.github.io/a11y-guidelines/)
- [http://www.idpf.org/epub/a11y/](http://www.idpf.org/epub/a11y/)