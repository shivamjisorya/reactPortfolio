import React from 'react';

const Testimonial = () => {
    return (
        <section id="Testimonial">
            <div className="container d-flex justify-content-around align-items-center flex-column">
                <h2 className="testimonial-title">TESTIMONIAL</h2>
                <div className="testimonial-blocks d-flex">
                    <div className="block block_first">
                     
                        <p>Shivam Jisorya has consistently demonstrated exceptional dedication and enthusiasm in mastering the MERN stack, consistently delivering high-quality solutions. His proactive problem-solving skills and leadership in group projects reflect his strong technical acumen and collaborative spirit. Shivam's commitment to continuous learning and professional growth makes him a valuable asset, poised to excel in the field of full stack development. His positive attitude and reliability make him a standout student and team member.</p>
                        <h3>Anu Katoch</h3>
                        <p className="position">Teacher at Vsit.In</p>
                    </div>
                    <div className="block block_second">
                       
                        <p>Shivam Jisorya is an outstanding colleague known for his strong technical skills and collaborative approach. He consistently contributes innovative solutions and demonstrates a proactive attitude in team projects. Shivam's dedication to learning and professional development makes him a valuable asset to our team. His positive demeanor and willingness to help others make him a pleasure to work with.</p>
                        <h3>Narender Kumar</h3>
                        <p className="position">Team Lead at Manthan IT Solutions</p>
                    </div>
                </div>
               
            </div>
        </section>
    );
}

export default Testimonial;
