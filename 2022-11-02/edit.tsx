import AutoSizeImage from '@components/AutoSizeImage'
import CustomEditor from '@components/Editor'
import { Slider } from '@mantine/core'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CommentEdit() {
  const router = useRouter()
  const { orderItemId } = router.query
  const [ rate, setRate] = useState(0)
  const [ editorState, setEditorState ] = useState<EditorState | undefined>(
    undefined
  )
  useEffect(() => {
    if (orderItemId != null) {
      fetch(`/api/get-comment?orderIemId=${orderItemId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.items.contents) {
            setEditorState(
              EditorState.createWithContent(
                convertFromRaw(JSON.parse(data.items.contents))
              )
            )
          } else {
            setEditorState(EditorState.createEmpty())
          }
        })
    }
  }, [orderItemId])

  const handleSave = () => {
    if (editorState) {
      fetch(`/api/update-product`, {
        method: 'POST',
        body: JSON.stringify({
          orderItemId: Number(productId),
          rate: 
          contents: JSON.stringify(
            convertToRaw(editorState.getCurrentContent())
          ),
        }),
      })
        .then((res) => res.json())
        .then(() => {
          alert('Success')
        })
    }
  }
  return (
    <div>
      {editorState != null && (
        <CustomEditor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          onSave={handleSave}
        />
      )}
      <Slider defaultValue={5}
      min={1}
      max={5}
      value={rate}
      onChange={setRate}
      step={1} marks={[{ value: 1 }, { value: 2 }, { value: 3 }]} />
      <input ref={inputRef} type="file" accept="image/*" />
      
      {images && 
      images.length > 0 &&
      images.map((image, idx) => <AutoSizeImage key={idx} src={image} />)}
      </div>
  )
}
