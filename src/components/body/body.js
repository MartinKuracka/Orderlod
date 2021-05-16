import H2 from './body_components/header_h2/header_h2';
import Text from './body_components/text/body_text';
import Bullet from './body_components/bullet_point/body_bullet_list_item';
import Code from './body_components/code_snippet/body_code_snippet';
import SamplePic from '../../img/code_snippets/sample1.JPG';
import Note from './body_components/note/note';

const Body = () => {
    return (
        <div className='lg:w-4/5 self-end h-screen mt-10'>
            <H2>Sample header name</H2>
            <Text>This is a sample tex of how the main information will look like in the documentation. Every instruction would be written in this text format. </Text>
            <Text>Next thing is the format of the bullet list. It will look like this (standard view):</Text>
            <Bullet>one</Bullet>
            <Bullet>two</Bullet>
            <Bullet>three</Bullet>
            <H2>Code snippets</H2>
            <Text>For code snippets, following format will be provided:</Text>
            <Code>{SamplePic}</Code>
            <Note>If any note is required, it will be formatted inside the gray container with smaller font size</Note>
        </div>
    )
}

export default Body;