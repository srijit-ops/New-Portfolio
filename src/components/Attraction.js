import React from 'react'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './common/text-reveal-card'

function Attraction() {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5 flex justify-center items-center flex-col overflow-x-hidden">
        <TextRevealCardDescription>
          Hover the text slowly and see the magic.
        </TextRevealCardDescription>
        <TextRevealCard
        text="You've a cool idea?"
        revealText="I will make it reality."
      />
      <TextRevealCardTitle>
      So, let's collaborate.
    </TextRevealCardTitle>
    </div>
  )
}

export default Attraction