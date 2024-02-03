import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./price.scss";
import React from "react";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
export const metadata = {
    title: "Mindmap - Price",
    metadataBase: process.env.NEXT_PUBLIC_HOST,
    openGraph: {
        title: "Mindmap - Price",
        description:
            "Powerful & Easy To Use — Your Ideas Deserve A Beautiful Online Mind Map Canvas. Start For Free. Upgrade Anytime. ",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/c/cf/Elements_of_the_culture_mindmap.png",
        ],
    },
};
function Price() {
    return (
        <>
            <div className="price">
                <div className="info">
                    <h2 className="heading-feature">
                        Designed for business teams like yours
                    </h2>
                    <div className="desc">
                        Here at Flowbite we focus on markets where technology,
                        innovation, and capital can unlock long-term value and
                        drive economic growth.
                    </div>
                </div>
                <div className="table-price">
                    <div className="sub-price">
                        <h3 className="heading">Basic</h3>
                        <div className="desc">
                            <span>For teams exploring</span>
                            <span>MindMeister for the first time</span>
                        </div>
                        <div className="price-month">Free</div>
                        <div className="span">Per User/Forever</div>
                        <div className="button">Stay Basic</div>

                        <div className="use">
                            <div className="intro">Mind mapping with:</div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Up to 3 mind maps
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Unlimited Map Collaborators
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                MeisterTask Integration
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                MS Teams Integration
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                MS Teams Integration
                            </div>
                        </div>
                    </div>

                    <div className="sub-price">
                        <h3 className="heading">Personal</h3>
                        <div className="desc">
                            <span>For personal mind mapping</span>
                            <span>with advanced features</span>
                        </div>
                        <div className="price-month">
                            $4 <span>50</span>
                        </div>
                        <div className="span">Per User/Month</div>
                        <div className="button">Get Started</div>

                        <div className="use">
                            <div className="intro">Includes Basic and:</div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Unlimited mind maps
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                File and image attachments
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                PDF and image export
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Mind map printing
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Mind map printing
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Admin account
                            </div>
                        </div>
                    </div>

                    <div className="sub-price special">
                        <div className="box-block">
                            <div className="box">
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#ffffff" }}
                                />
                            </div>
                        </div>
                        <h3 className="heading">Pro</h3>
                        <div className="desc">
                            <span>For teams, with ultimate</span>
                            <span>features for collaboration</span>
                        </div>
                        <div className="price-month">
                            $6 <span>50</span>
                        </div>
                        <div className="span">Per User/Month</div>
                        <div className="button">Get Started</div>
                        <div className="use">
                            <div className="intro">Includes Personal and:</div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Word export
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                PowerPoint export
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Google Workspace for domains sign-on
                            </div>
                        </div>
                    </div>

                    <div className="sub-price">
                        <h3 className="heading">Business</h3>
                        <div className="desc">
                            <span>For companies with specific</span>
                            <span>requirements</span>
                        </div>
                        <div className="price-month">
                            $10 <span>50</span>
                        </div>
                        <div className="span">Per User/Month</div>
                        <div className="button">Get Started</div>

                        <div className="use">
                            <div className="intro">Includes Pro and:</div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Group sharing
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Compliance exports and backups
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Custom team domain
                            </div>
                            <div className="sub-use">
                                <FontAwesomeIcon icon={faCheck} />
                                Priority email & phone support
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Price;
