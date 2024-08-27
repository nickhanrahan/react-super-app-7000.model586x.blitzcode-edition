import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { SxProps, Theme } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'

import { useMainLikeMutation } from '../../gql/generated/generated'

const styles: { [key: string]: SxProps<Theme> } = {
  pageBox: {
    p: 40,
  },
  likeBox: {
    textAlign: 'center',
  },
  icon: {
    fontSize: '200px',
  },
}

export const MainLike = () => {
  const [isLiked, setIsLiked] = useState<boolean | null>(null)

  const [mainLikeMutation, { data: likeData }] = useMainLikeMutation()

  useEffect(() => {
    let likeIncrement = 0
    if (typeof isLiked === 'boolean') {
      likeIncrement = isLiked ? 1 : -1
    }
    mainLikeMutation({
      fetchPolicy: 'network-only',
      variables: {
        like: likeIncrement,
      },
    })
  }, [isLiked])

  const likeHandler = () => {
    const newLike = !isLiked
    setIsLiked(newLike)
  }

  return (
    <Box sx={styles.pageBox}>
      <Box sx={styles.likeBox}>
        <IconButton color='primary' onClick={likeHandler}>
          {isLiked ? <ThumbUpIcon sx={styles.icon} /> : <ThumbUpOutlinedIcon sx={styles.icon} />}
        </IconButton>
        {likeData && <Typography variant='h3'>{`${likeData.mainLike}`}</Typography>}
      </Box>
    </Box>
  )
}
