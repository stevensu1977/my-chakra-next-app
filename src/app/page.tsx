
'use client'

import {useState, useEffect} from "react";


import { useRecoilState } from "recoil"
import { nameState } from "../state"

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
} from '@chakra-ui/react'


export default function CallToActionWithIllustration() {
  const [name, setName] = useRecoilState(nameState)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Meeting scheduling{' '}
          <Text as={'span'} color={'orange.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
         {isClient&&(name!=="")&&(<>Hello , {name} ! </> ) } 
          Never miss a meeting. Never be late for one too. Keep track of your meetings and
          receive smart reminders in appropriate times. Read your smart “Daily Agenda”
          every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={'50vw'}>
        <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              ml={"10"}
              height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }}
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
            />
         
        </Flex>
      </Stack>
    </Container>
  )
}


