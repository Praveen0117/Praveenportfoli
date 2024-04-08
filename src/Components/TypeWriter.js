import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  return (
    <Typewriter

    options={{
      strings: ['Software Developer', 'Frontend Developer' , 'React Developer',],
      autoStart: true,
      loop: true,
      wrapperClassName: "text-[28px] md:text-[52px]",
      cursorClassName	: 'text-[28px] md:text-[42px]',
      delay : '250'

      
    }}
  />
  );
};

export default TypewriterComponent;