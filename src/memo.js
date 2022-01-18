//追加ボタン押下時に実行する関数
const onClickAdd = () => {
    const textEl = document.getElementById("add-text");
    const text = textEl.value;
    textEl.value = "";;

    //li生成
    const li = document.createElement("li");
    //div生成
    const div = document.createElement("div");
    //p生成
    const p = document.createElement("p");
    p.textContent = text;
    //button生成
    const button = document.createElement("button");
    button.textContent ="削除";

    //ボタン押下時に行を削除する
    button.addEventListener("click" , () => {
        //削除対象の行（li）を取得
        const deleteTarget = button.closest("li");
        //ul配下から上記で特定した行を削除
        document.getElementById("memo-list").removeChild(deleteTarget);
    });

    //div配下にpとbutton設定
    div.appendChild(p);
    div.appendChild(button);
    //li配下に上記のliを設定
    li.appendChild(div);
    //メモ一覧のリストに上記のliタグを設定
    document.getElementById("memo-list").appendChild(li);
};

//追加ボタン押下時にonClidkAdd関数を実行するよう登録
document.getElementById("add-button")
.addEventListener("click", () => onClickAdd());