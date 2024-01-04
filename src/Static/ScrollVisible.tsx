import { Button, extendTheme, StackDivider } from '@chakra-ui/react'
import React, { useRef, useEffect } from 'react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { motion, useScroll, useInView, useAnimation } from 'framer-motion'

interface Props {
  children: JSX.Element
}

export const ScrollVisible = ({children} : Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section ref={ref} style={{width: "100%"}}>
      <div
        style={{
          transform: isInView ? 'none' : 'translateY(200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </div>
    </section>
  );
};

