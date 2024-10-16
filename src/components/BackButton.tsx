import { DigiButton, DigiIconArrowLeft } from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate("/annonser");
	};

	return (
		<>
			<DigiButton
				afSize="large"
				afVariation="primary"
				onClick={handleGoBack}
				afId="back-button"
			>
				<DigiIconArrowLeft slot="icon" />
				Tillbaka
			</DigiButton>
		</>
	);
};

export default BackButton;
