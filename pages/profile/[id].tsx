import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../../src/lib/axios";
import { useQuery } from "@tanstack/react-query";

const ProfilePage = () => {
    const router = useRouter();
    const userId = router.query.id as string;

    const { data: session } = useSession();

    // const isOwnProfile = session?.user?.id === userId;

    const { data: profile } = useQuery(["profile", userId], async () => {
    const { data } = await api.get(`/profile/${userId}`)
    return data?.profile ?? {}
  }, {
    enabled: !!userId
  })

    return (
        <div>
            <img src={profile?.user?.avatar_url} alt="" />
            <p>{profile?.user?.name}</p>
            <p>{profile?.user?.created_at}</p>
        </div>
    )
}

export default ProfilePage