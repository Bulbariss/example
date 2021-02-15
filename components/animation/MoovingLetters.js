import React, { useRef, useEffect } from "react";
import useIntersect from "../utils/useIntersect";

function MoovingLetters({ text, className, triggerOnce = true }) {
  let charPosition = useRef(-1);
  let iteration = useRef(0);
  let letters = useRef(text.replace(/\s/g, ""));
  let finalMatrix = useRef([]);
  const lengthOfFinalMatrix = 55;
  const textWrapper = useRef(null);
  const requestRef = useRef(null);
  const wasTriggered = useRef(false);
  const [ref, entry] = useIntersect({
    threshold: 0,
  });

  function splitText(str) {
    return str.replace(/\w+[!"#$%&'()*+,\-./:;<=>?@[\\\]^_‘{|}~]?/g, splitting);
  }

  function splitting(match) {
    let beginning = '<span class="word">';
    let middle = "";
    let end = "</span>";
    match.split("").map((char) => {
      return (middle += `<span class="char sym-${Math.round(
        (Math.random() * 3 + 3) * 7
      )}">${char}</span>`);
    });
    return beginning + middle + end;
  }

  function getGlitchesMatrix() {
    finalMatrix.current = Array(lengthOfFinalMatrix)
      .fill()
      .map(() => Array(letters.current.length).fill("sym-0"));
    for (let i = 0; i < letters.current.length; i++) {
      // max result of random should be lower than length of final matrix
      for (let j = 0; j < Math.round((Math.random() * 3 + 3) * 9); j++) {
        finalMatrix.current[j][i] = `sym-${Math.round(Math.random() * 41 + 1)}`;
      }
    }
  }

  function getClassName() {
    charPosition.current += 1;
    return finalMatrix.current[iteration.current][charPosition.current];
  }

  function changeClassNames() {
    charPosition.current = -1;
    if (iteration.current < finalMatrix.current.length && textWrapper.current) {
      textWrapper.current.innerHTML = textWrapper.current.innerHTML.replace(
        /sym-\d?\d/g,
        getClassName
      );
      iteration.current += 1;
      requestRef.current = requestAnimationFrame(changeClassNames);
    }
  }

  useEffect(() => {
    textWrapper.current.innerHTML = splitText(text);
    getGlitchesMatrix();
  }, []);

  useEffect(() => {
    if (entry.isIntersecting && (!wasTriggered.current || !triggerOnce)) {
      wasTriggered.current = true;
      setTimeout(() => {
        requestRef.current = requestAnimationFrame(changeClassNames);
      }, 1500);
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [entry.isIntersecting]);

  return (
    <div ref={ref}>
      <div ref={textWrapper} className={className} id="mooving-letters"></div>
      <style global jsx>{`
        #mooving-letters .word {
          position: relative;
          display: inline-block;
        }

        #mooving-letters span.char,
        #mooving-letters-invisible span.char {
          position: relative;
          color: transparent;
        }

        #mooving-letters span.sym-0,
        #mooving-letters-invisible span.sym-0 {
          color: #333;
        }

        #mooving-letters span.char::after,
        #mooving-letters-invisible span.char::after {
          position: absolute;
          left: 0;
          top: -15%;
          color: #333;
          visibility: visible;
        }

        #mooving-letters span.sym-0::after {
          content: "";
        }

        #mooving-letters span.sym-1::after {
          content: "¡";
        }

        #mooving-letters span.sym-2::after {
          content: "™";
        }

        #mooving-letters span.sym-3::after {
          content: "£";
        }

        #mooving-letters span.sym-4::after {
          content: "¢";
        }

        #mooving-letters span.sym-5::after {
          content: "∞";
        }

        #mooving-letters span.sym-6::after {
          content: "§";
        }

        #mooving-letters span.sym-7::after {
          content: "¶";
        }

        #mooving-letters span.sym-8::after {
          content: "•";
        }

        #mooving-letters span.sym-9::after {
          content: "ª";
        }

        #mooving-letters span.sym-10::after {
          content: "≠";
        }

        #mooving-letters span.sym-11::after {
          content: "å";
        }

        #mooving-letters span.sym-12::after {
          content: "ß";
        }

        #mooving-letters span.sym-13::after {
          content: "∂";
        }

        #mooving-letters span.sym-14::after {
          content: "©";
        }

        #mooving-letters span.sym-15::after {
          content: "∆";
        }

        #mooving-letters span.sym-16::after {
          content: "˚";
        }

        #mooving-letters span.sym-17::after {
          content: "œ";
        }

        #mooving-letters span.sym-18::after {
          content: "®";
        }

        #mooving-letters span.sym-19::after {
          content: "†";
        }

        #mooving-letters span.sym-20::after {
          content: "¥";
        }

        #mooving-letters span.sym-21::after {
          content: "π";
        }

        #mooving-letters span.sym-22::after {
          content: "≈";
        }

        #mooving-letters span.sym-23::after {
          content: "√";
        }

        #mooving-letters span.sym-24::after {
          content: "∫";
        }

        #mooving-letters span.sym-25::after {
          content: "…";
        }

        #mooving-letters span.sym-26::after {
          content: "ç";
        }

        #mooving-letters span.sym-27::after {
          content: "√";
        }

        #mooving-letters span.sym-28::after {
          content: "ø";
        }

        #mooving-letters span.sym-29::after {
          content: "¨";
        }

        #mooving-letters span.sym-30::after {
          content: "˜";
        }

        #mooving-letters span.sym-31::after {
          content: "µ";
        }

        #mooving-letters span.sym-32::after {
          content: "≤";
        }

        #mooving-letters span.sym-33::after {
          content: "≥";
        }

        #mooving-letters span.sym-34::after {
          content: "÷";
        }

        #mooving-letters span.sym-35::after {
          content: "?";
        }

        #mooving-letters span.sym-36::after {
          content: "|";
        }

        #mooving-letters span.sym-37::after {
          content: "░";
        }

        #mooving-letters span.sym-38::after {
          content: "▒";
        }

        #mooving-letters span.sym-39::after {
          content: "▓";
        }

        #mooving-letters span.sym-40::after {
          content: "<";
        }

        #mooving-letters span.sym-41::after {
          content: ">";
        }

        #mooving-letters span.sym-42::after {
          content: "/";
        }
      `}</style>
    </div>
  );
}

export default MoovingLetters;
