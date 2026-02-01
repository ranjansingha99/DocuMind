interface AnalyzeButtonProps {
    setIsLoader: (value: boolean) => void;
    setNewChat: (value: boolean) => void;
}

const AnalyzeButton:React.FC<AnalyzeButtonProps> = ({setIsLoader, setNewChat}) => {

    const handleStartAnalyze = () => {

        // if start analyzer success then setIsLoader(true) 
        setIsLoader(true);
        setNewChat(false);

        
    }
    return (
        <button onClick={handleStartAnalyze}>Analyze the PDF</button>
    )
}

export default AnalyzeButton;