import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Typography } from '@material-ui/core';
import { memo, useState } from 'react';
import useStyles from './styles';

interface InputsRichtextProps {
  title?: string,
  placeholder?: string,
  name: string,
}
const InputsRichtext = memo((props: InputsRichtextProps) => {
  const classes = useStyles();
  const { title } = props;
  //const [addedData, showData] = useState(0);
  const [addData, setVal] = useState("")

  const handleChange = (e, editor) => {
    const data = editor.getData()
    setVal(data)
  }

  return (
    <div>
      <Typography className={classes.textTitle} classes={{ root: classes.textTitle }}>{title}</Typography>
      <CKEditor
        editor={ClassicEditor}
        data={addData}
        onChange={handleChange}
      />
    </div>
  );
});
export default InputsRichtext;


