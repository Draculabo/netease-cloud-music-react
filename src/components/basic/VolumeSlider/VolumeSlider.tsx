import { Slider, SliderSingleProps } from "antd";
import VolumeSliderWrapper from "./volumeSlider.style";

type SliderPropType = {
    total: number;
};

function VolumeSlider(props: SliderPropType & SliderSingleProps & React.RefAttributes<unknown>) {
    const {
        value: current,
        className,
        tooltipVisible = true,
        vertical = false,
        defaultValue = 0,
    } = props;

    return (
        <VolumeSliderWrapper className={className}>
            <Slider
                vertical={vertical}
                defaultValue={defaultValue}
                value={current}
                tooltipVisible={tooltipVisible}
                onChange={props.onChange}
                onAfterChange={props.onAfterChange}
            />
        </VolumeSliderWrapper>
    );
}

export default VolumeSlider;
