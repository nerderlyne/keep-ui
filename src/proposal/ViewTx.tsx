import { Stack, Text, Card } from '@kalidao/reality'

const ViewTx = ({ tx }: { tx: any }) => {
  return (
    <Stack>
      <Card padding="10">
        <Text>Type: {tx?.op}</Text>
        <Text>Nonce: {tx?.nonce}</Text>
        <Text>To: {tx?.to}</Text>
        <Text>Value: {tx?.value}</Text>
        <Text wordBreak="break-word">Data: {tx?.data}</Text>
      </Card>
    </Stack>
  )
}

export default ViewTx
