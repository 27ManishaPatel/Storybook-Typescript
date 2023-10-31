type Props = {
// Three trafic lights
    variant: 'green' | 'yellow' | 'red'
};

// Light component with style 

 const Light =({variant = 'green'}: Props)=> {
    return <div style={{
        padding: 20,
        background: variant,
        borderRadius: '50%',
        height: 50,
        width: 50
    }}></div>
}
 export default Light;