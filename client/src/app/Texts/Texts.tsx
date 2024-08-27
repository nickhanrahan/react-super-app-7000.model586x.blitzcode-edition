import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React, { FC, useEffect, useState } from 'react'

import { TextTest, useGetTextsLazyQuery } from '../../gql/generated/generated'

const Texts: FC = () => {
  const [texts, setTexts] = useState<TextTest[]>([])
  const [getTexts, { data, loading }] = useGetTextsLazyQuery({
    fetchPolicy: 'network-only',
  })

  useEffect(() => {
    if (data && !loading) {
      setTexts([...(data.getTexts as TextTest[]), ...texts])
    }
  }, [data])

  const clickHandler = () => {
    getTexts()
  }
  return (
    <Box>
      <Button variant='contained' onClick={clickHandler}>
        Fetch
      </Button>
      {texts && (
        <Box>
          {texts.map((text, textIndex) => {
            const timeStampConverted = new Date(Number(text.date))
            return (
              <Box key={`${textIndex}text`} style={{ border: '1px solid' }}>
                <Typography>Text: {text.text}</Typography>
                <Typography>Date: {timeStampConverted.toString()}</Typography>
              </Box>
            )
          })}
        </Box>
      )}
    </Box>
  )
}

export default Texts
