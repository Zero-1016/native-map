import IonicIcons from 'react-native-vector-icons/Ionicons';
import {colors} from '@/styles/theme/colors';
import styled from '@emotion/native';
import useThemeStore from '@/store/useThemeStore';

interface ImageInputProps {
  onChange: () => void;
}

function ImageInput({onChange}: ImageInputProps) {
  const {theme} = useThemeStore();
  return (
    <S.ImageInputButton onPress={onChange}>
      <IonicIcons
        name="camera-outline"
        size={20}
        color={colors[theme].GRAY_500}
      />
      <S.InputText>사진 추가</S.InputText>
    </S.ImageInputButton>
  );
}

const S = {
  ImageInputButton: styled.Pressable`
    border-width: 2px;
    border-style: dotted;
    border-color: ${props => props.theme.colors.GRAY_300};
    height: 70px;
    width: 70px;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &:active {
      opacity: 0.5;
    }
  `,
  InputText: styled.Text`
    font-size: 12px;
    color: ${props => props.theme.colors.GRAY_500};
  `,
};

export default ImageInput;
