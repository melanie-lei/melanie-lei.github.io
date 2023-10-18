import React from "react"
import '../../App.css'
import './Blog.css'
import Footer from "../Footer"

export default function Blog() {
  return (<>
    <div className='blog'>
      <h1 className='page-title'>Blog</h1>
      <p className='page-description'>Here I describe my thoughts on various topics that define who I am.</p>
    </div>

    <div className='blog-article'>
      <div className='blog-item'>
        <h2 className='blog-title'>Computer Science</h2>
        <p className='blog-text'>The Scratch blocks always made so much sense. No nonsense. No gimmicks. Just tell it what you want to do, hit “run”, and it does the thing. Now as I’m getting older and the concepts more complex, the initial reason why I decided to study computer science is slipping away with each lecture and each unfinished project. </p>
        <p className='blog-text'>However, I’ve developed a new appreciation for the subject. This appreciation stems from the joy of creation and the satisfaction of overcoming challenges. The tension as the program starts, each millisecond longer than the last, becomes thicker the more times I’ve failed. Finally, because of who-knows-what, it works! All cases are tested and passed. I run it again just in case the last time was a fluke and it works again! A wave of relief washes over as I relish in my success. After hours or weeks or months of challenges, I have created something that is a testament to my hard work and dedication. In times like these, I tell myself that I chose the right career path. </p>
      </div>
      <div className='bereal-item'>
        <img className='bereal' src='/images/csbereal.jpeg' alt='cs bereal' />
      </div>
    </div>

    <div className='blog-article'>
      <div className='bereal-item'>
        <img className='bereal' src='/images/gamingbereal.jpeg' alt='gaming bereal' />
      </div>
      <div className='blog-item'>
        <h2 className='blog-title'>Video Games</h2>
        <p className='blog-text'>There is just so much to appreciate within the community. Music, concepts, tournaments, and new updates always spark lots of excitement. In a time of my life where my closest friends are thousands of kilometers away, it keeps us talking and connected. It also continues to give me opportunities to speak to new people and have easy conversational topics apart from academics. </p>
        <p className='blog-text'>Admittedly, my favorite part of gaming has never been the actual game but rather the conversations that bounce back and forth overtop the constant action on screen. As much as I would regret it the next morning, it was always worth it in the end to stay up until the birds started chirping, just chatting away after a long night. Sleep deprivation is as detrimental as an illegal blood alcohol % and causes true emotions to come spilling out over the filter. Rambling about the same things over and over from different perspectives, we all fall asleep that night (morning?) with greater insight and a newfound appreciation for each other.</p>
      </div>
    </div>

    <div className='blog-article'>
      <div className='blog-item'>
        <h2 className='blog-title'>Music</h2>
        <p className='blog-text'>For me, music isn’t a hobby in the way that I play instruments or produce beats. Trust me, I’ve tried and it really is not my thing. Still though, it influences a lot of the media I consume and brings large amounts of joy into my life. As for the music itself, I’m always listening when I walk to my classes, study, code, or game. I mainly enjoy pop and r&b in many forms and languages; I particularly like the way music from those two genres bounce around in my brain, probably stimulating some sort of “happy neuron”. </p>
        <p className='blog-text'>Of course, like any form of media, music has its own fan bases within which I can share my love for specific artists or groups. In more established industries such as k-pop, there is additional content aside from the music, which also deepens my appreciation for the artists as people. </p>
        <p className='blog-text'>I love sharing my music with my friends and talking about it, but enjoying it alone is also a pleasure. At the time of writing this, I’ve gone to as many concerts alone as I have with others and both are enjoyable in their own way. The adrenaline from just standing there, loudly and publicly enjoying the music you love is incomparable. In a sense, music keeps me company and talks to me when I’m alone, much differently than friends do. Where with friends I must think and contribute, with music I am allowed to relax and consume.</p>
      </div>
      <div className='bereal-item'>
        <img className='bereal' src='/images/concertbereal.jpeg' alt='concert bereal' />
      </div>
    </div>

    <Footer />
  </>
  )
}