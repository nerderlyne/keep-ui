import Link from 'next/link'

import { Avatar, Box, Heading, IconDiscord, IconLink, IconTwitter, Stack, Text } from '@kalidao/reality'
import { getExplorerLink } from '~/utils/getExplorerLink'
import { prettyDateShort } from '~/utils/prettyDate'
import { getTwitterUsername, prettyLink } from '~/utils/prettyLink'

import * as styles from './styles.css'

type Props = {
  summoned: string
  name: string
  avatar: string
  address: string
  bio?: string
  website?: string
  twitter?: string
  discord?: string
  chainId: number
}

const Profile = ({ summoned, name, avatar, bio, twitter, website, discord, address, chainId }: Props) => {
  return (
    <Box className={styles.profileContainer}>
      <Box width="full">
        <Box padding="5" display="flex" alignItems={'center'} justifyContent="space-between" gap="10">
          <Link href={`/${chainId}/${address}/`}>
            <Avatar
              shape="circle"
              size={{
                xs: '16',
                lg: '32',
              }}
              label="brand_pic"
              src={avatar}
              address={address}
            />
          </Link>
          <Box width="full" display="flex" flexDirection={'column'} gap="1">
            <Link
              href={`/${chainId}/${address}/`}
              style={{
                textDecoration: 'none',
              }}
            >
              <Heading level="2">{name}</Heading>
            </Link>
            <Text
              size={{
                xs: 'small',
                lg: 'base',
              }}
              font="mono"
            >
              <i>{bio}</i>
            </Text>
          </Box>
        </Box>
        <Box className={styles.infoBar}>
          <Link href={getExplorerLink(address, 'address', chainId)} className={styles.socialIcon}>
            <Text color="textSecondary">🎂 {prettyDateShort(summoned)}</Text>
          </Link>
          <Stack direction={'horizontal'} align="center" space="1">
            {twitter && (
              <Link href={twitter} className={styles.labelledLink}>
                <IconTwitter strokeWidth="0.5" color="textSecondary" size="4" />
                <Text color="textSecondary">{getTwitterUsername(twitter)}</Text>
              </Link>
            )}
            {website && (
              <Link href={website} className={styles.labelledLink}>
                <IconLink strokeWidth="0.5" color="textSecondary" size="4" />
                <Text color="textSecondary">{prettyLink(website)}</Text>
              </Link>
            )}
            {discord && (
              <Link href={discord} className={styles.socialIcon}>
                <IconDiscord strokeWidth="0.5" color="textSecondary" size="4" />
              </Link>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default Profile
