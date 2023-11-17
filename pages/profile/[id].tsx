import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../../src/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Flex } from "@chakra-ui/react";

const ProfilePage = () => {
    const router = useRouter();
    const userId = router.query.id as string;

    const { data: session } = useSession();

    // const isOwnProfile = session?.user?.id === userId;

    const { data: profile } = useQuery(["profile", userId], async () => {
    const { data } = await api.post(`/profile/${userId}`, {
      id: userId
    })
    return data?.profile ?? {}
  }, {
    enabled: !!userId
  })

    // console.log(profile);

    return (
      <Flex
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
    </Flex>
    )
}

export default ProfilePage