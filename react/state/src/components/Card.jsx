import{EditButton} from "./EditButton";

const style = {
    width:"300px",
    height:"200px",
    margin:"8px",
    borderRadius: "8px",
    backgroundColor:"#e9dbd0",
    display:"flex",
    flexDirection:"column",
    justifyContent:"Center",
    alignItems:"center"
};

export const Card = props => {
    //propsとして管理者フラグを受け取る
    const{isAdmin} = props;

    return(
        <div>
            <p>山田太郎</p>
            <EditButton isAdmin={isAdmin} />
        </div>
    );
};