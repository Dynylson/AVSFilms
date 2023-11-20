import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../../src/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { prisma } from "../../src/lib/prisma"
import { GetServerSideProps } from "next";

const ProfilePage = ({ props }: any) => {
    const router = useRouter();
    const userId = router.query.id as string;

    // const [carregando, setCarregando] = useState(true);

    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     setCarregando(false);
    //   }, 1000);
  
    //   return () => {
    //     clearTimeout(timeout)
        
    //   };
    // }, []);
    // console.log(props);
    // console.log("user id", userId)

    const { data: session } = useSession();

    // const [profile, setProfile] = useState(null)
    // const isOwnProfile = session?.user?.id === userId;

    // useEffect(() => {
    //   const fetchProfile = async () => {
    //     try {
    //       const { data } = await api.post(`/profile/${userId}`, {
    //         id: userId
    //       });
    //       setProfile(data);
    //     } catch (error) {
    //       if (error.response) {
    //         // O servidor respondeu com um status de erro (ex: 4xx, 5xx)
    //         console.error('Erro de resposta:', error.response.data);
    //       } else if (error.request) {
    //         // A requisição foi feita, mas não recebeu resposta
    //         console.error('Sem resposta:', error.request);
    //       } else {
    //         // Ocorreu um erro desconhecido
    //         console.error('Erro desconhecido:', error.message);
    //       }
    //       // Trate o erro de acordo com sua lógica ou exiba uma mensagem para o usuário
    //     }
    //   };
    //   fetchProfile();
    // }, []);

    // console.log(profile)
    

    const { data: profile } = useQuery(["profile", userId], async () => {
    const { data } = await api.get(`/profile/${userId}`)
    return data?.profile ?? {}
  }, {
    enabled: !!userId
  })

    console.log(profile);

    return (
      <>
        {!!profile ? (<Flex
        direction={["column", "row"]}
        maxW={1700}
        mx='auto'
        py='1.3rem'
        px='1rem'
        justifyContent='space-between'
        alignItems='center'
      >
        <Flex alignItems="center" gap="1rem">
          <img src={profile?.user?.avatar_url} style={{borderRadius: '50%'}} alt="" />
          <p>{profile?.user?.name}</p>
          <p>{profile?.user?.created_at}</p>
        </Flex>
      </Flex>) : (
        <h1>Carregando...</h1>
      )}
    </>
    )
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const userId = String(params?.user_id)

//   try {
//     const user = await prisma.user.findFirstOrThrow({
//       where: {
//         id: userId,
//       },
//       include: {
//         ratings: {
//           orderBy: {
//             created_at: 'desc',
//           },
//           include: {
//             book: {
//               include: {
//                 categories: {
//                   include: {
//                     category: true,
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     })

//     const pages = user.ratings.reduce((acc, rating) => {
//       return (acc += rating.book.total_pages)
//     }, 0)

//     const books = user.ratings.map((rating) => rating.book)

//     const authors = user.ratings.map((rating) => rating.book.author)

//     const uniqueAuthors = authors.filter(
//       (value, index, array) => array.indexOf(value) === index,
//     )

//     const genres = books
//       .map((book) => book.categories.map((category) => category.category))
//       .flat()

//     const genreNumbers = genres
//       .reduce((acc: any, genre) => {
//         const qtd = genres.filter((i: any) => i.id === genre.id).length
//         return [
//           ...acc,
//           {
//             ...genre,
//             qtd,
//           },
//         ]
//       }, [])
//       .sort((a: any, b: any) => b.qtd - a.qtd)

//     const infos = {
//       pages,
//       booksCount: books.length,
//       authorsCount: uniqueAuthors.length,
//       bestGenre: genreNumbers[0] ? genreNumbers[0] : null,
//     }

//     return {
//       props: {
//         ratings: JSON.parse(JSON.stringify(user.ratings)),
//         user: JSON.parse(JSON.stringify(user)),
//         infos,
//       },
//     }
//   } catch (error) {
//     return {
//       notFound: true,
//     }
//   }
// }

export default ProfilePage