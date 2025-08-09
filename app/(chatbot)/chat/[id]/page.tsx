import React from 'react'

const ChatDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  return (
    <div>ChatDetailsPage: {id}</div>
  )
}

export default ChatDetailsPage