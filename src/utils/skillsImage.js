import html from '../assets/svg/skills/html.svg';
import css from '../assets/svg/skills/css.svg';
import python from '../assets/svg/skills/python.svg';
import java from '../assets/svg/skills/java.svg';
import kotlin from '../assets/svg/skills/kotlin.svg';
import dart from '../assets/svg/skills/dart.svg';
import javascript from '../assets/svg/skills/javascript.svg';
import php from '../assets/svg/skills/php.svg';
import csharp from '../assets/svg/skills/csharp.svg';
import cplusplus from '../assets/svg/skills/cplusplus.svg';

const skillsMap = {
    html,
    css,
    python,
    java,
    kotlin,
    dart,
    javascript,
    php,
    'c#': csharp,
    'c++': cplusplus,
};

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    return skillsMap[skillID] || html;
};
