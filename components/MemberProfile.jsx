import { UserButton, currentUser, auth } from '@clerk/nextjs'

const MemberProfile = async () => {
  const user = await currentUser()
  // const { userId } = auth()
  console.log(user)
  return (
    <div className='flex items-center gap-2 px-4'>
      <UserButton afterSignOutUrl='/' />
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  )
}
export default MemberProfile
