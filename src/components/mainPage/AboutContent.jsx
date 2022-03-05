import React from 'react';

const AboutContent = () => {
    return (
        <React.Fragment>
            <div className='row you-are'>
                <div className='col-5 left-block'><p>About</p></div>
                <div className='col-7 right-block '>
                    <p>
                        We are the part of software development industry and deeply involved in educational processes. Therefore we know exactly all your hiring needs features.
                        <br/> We took into account all the wishes really important for the employees of the IT-market and made this outstanding service!
                    </p>
                </div>
            </div>

            <div className='row anonymizer'>
                <div className='col-6 anonymizer-bl'>
                    <p className='anonymizer-title'>Anonymizer.</p>
                    <p className='anonymizer-text'>Great option! You can look for a new job and be sure that your current employer will know nothing about your intentions. Just activate the Anonymizer.</p>
                </div>
                <div className='col-6 anonymizer-bl'>
                    <p className='anonymizer-title'>Verifier.</p>
                    <p className='anonymizer-text'>Unseen before. Now after activating verified status, a job-seeker will have a professional test on declared skills. Get verified status now.</p>
                </div>
            </div>
        </React.Fragment>

    );
};

export default AboutContent;