import { useMutation } from "@tanstack/react-query"
import { api } from "../../lib/axios"
import { Button } from "@chakra-ui/react"
import { FormEvent } from "react"

type RatingFormProps = {
    movieId: any
}

export function RatingForm({ movieId }: RatingFormProps) {
    const description = "avaliação legal"
    const currentRate = 5

    const { mutateAsync: handleRate } = useMutation(async () => {
        await api.post(`/movies/${movieId}/rate`, {
          description,
          rate: currentRate
        })
      })

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        await handleRate()
    }

    return (
        <Button onClick={handleSubmit}>avaliar</Button>
    )
}