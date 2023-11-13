import { useMutation } from "@tanstack/react-query"
import { api } from "../../lib/axios"
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react"
import { FormEvent, useRef, useState } from "react"
import { useRouter } from "next/router"
import { UsuarioNaoLogadoException } from "../../exceptions/UsuarioNaoLogadoException"
import { StarsRating } from "./StarsRating"

type RatingFormProps = {
    movieId: any
}

export function RatingForm({ movieId }: RatingFormProps) {
    const { query } = useRouter();
    const { id } = query;

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [avaliacao, setAvaliacao] = useState("")
    const initialRef = useRef(null)

    const currentRate = 5

    const { mutateAsync: handleRate } = useMutation(async () => {
        await api.post(`/movies/${id}/rate`, {
          description: avaliacao,
          rate: currentRate,
          book_id: id
        })
      })

    const handleSubmit = async (event: FormEvent) => {
      try {
        event.preventDefault()

        await handleRate()

        onClose()
        setAvaliacao("")
      } catch (e) {
        if (e instanceof UsuarioNaoLogadoException) {
          console.log("aaaaaaaa")
        } else {
          console.log("erro desconhecido")
        }
      }
        
    }

    return (
        <>
      <Button onClick={onOpen} backgroundColor='blue.900' color="white.900"
       _hover={{ 
        backgroundColor: "#1551CD"
        }}>Avaliar</Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Avaliação</ModalHeader>
          <StarsRating />
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl> */}
            <Textarea ref={initialRef} placeholder="Escreva sua avaliação" resize="none" value={avaliacao} onChange={({ target }) => setAvaliacao(target.value)} />
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
              Enviar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}