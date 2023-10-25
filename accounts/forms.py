from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth import get_user_model


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = get_user_model()
        fields = list(UserCreationForm.Meta.fields) + ['name', 'boj_id']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].label = '아이디'
        self.fields['name'].label = '이름'
        self.fields['boj_id'].label = '백준 아이디'
        self.fields['password1'].label = '비밀번호'
        self.fields['password2'].label = '비밀번호 확인'

        # 제약 조건 커스터마이즈
        self.fields['username'].help_text = "아이디는 150자 이하의 문자, 숫자 및 특수 문자(@/./+/-/_)만 허용됩니다."

        self.fields['password1'].help_text = "비밀번호는 적어도 8자 이상이어야 하며, 개인 정보와 유사하면 안 됩니다."
        self.fields['password2'].help_text = " "


class CustomUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = get_user_model()
        fields = ('name', 'email')

