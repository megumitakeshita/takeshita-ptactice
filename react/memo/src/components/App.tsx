import { ChangeEvent, useCallback, useState, FC } from "react";
import styled from 'styled-components';
import '../App.css';
import { MemoList} from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";


export const App: FC = () => {
  //カスタムフックからそれぞれ取得
  const {memos, addTodo, deleteTodo } = useMemoList();
  const[text,setText] = useState<string>("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  //[追加]ボタン押下時
  const onClickAdd = () => {
    //カスタムフックのメモ追加ロジック実行
    addTodo(text);
    //テキストボックスを空に
    setText("");
  };

  //[削除]ボタン押下時(何番目が押されたかを引数で受け取る)
  const onClickDelete = useCallback((index: number) => {
    //カスタムフックのメモ削除ロジック実行
    deleteTodo(index);
  },[deleteTodo]);

return(
  <MemoWrap>
    <h1>簡単メモアプリ</h1>
    <input type="text" value={text} onChange={onChangeText} />
    <SButton onClick={onClickAdd}>追加</SButton>
    <MemoList memos={memos} onClickDelete={onClickDelete} />
  </MemoWrap>
);
};

const SButton = styled.button`
  margin-left: 16px;
`;

const MemoWrap = styled.div`
  padding:1em;
`;