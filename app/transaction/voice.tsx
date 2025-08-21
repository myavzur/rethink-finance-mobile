import {
	AudioModule,
	RecordingPresets,
	setAudioModeAsync,
	useAudioRecorder,
	useAudioRecorderState
} from "expo-audio";
import { useEffect } from "react";
import { Alert, StyleSheet } from "react-native";

import { Button, MainLayout, PageHeader } from "@/shared/ui";

export default function Route() {
	const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
	const recorderState = useAudioRecorderState(audioRecorder);

	const record = async () => {
		await audioRecorder.prepareToRecordAsync();
		audioRecorder.record();
	};

	const stopRecording = async () => {
		// The recording will be available on `audioRecorder.uri`.
		await audioRecorder.stop();
	};

	useEffect(() => {
		(async () => {
			const status = await AudioModule.requestRecordingPermissionsAsync();

			if (!status.granted) {
				Alert.alert("Permission to access microphone was denied");
			}

			setAudioModeAsync({
				playsInSilentMode: true,
				allowsRecording: true
			});
		})();
	}, []);

	return (
		<MainLayout>
			<PageHeader title="Создать голосом" />

			<Button
				kind={recorderState.isRecording ? "outline" : "fill"}
				onPress={recorderState.isRecording ? stopRecording : record}
			>
				{recorderState.isRecording ? "Stop Recording" : "Start Recording"}
			</Button>
		</MainLayout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#ecf0f1",
		padding: 10
	}
});
