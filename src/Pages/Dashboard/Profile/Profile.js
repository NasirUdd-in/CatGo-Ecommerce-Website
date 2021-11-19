import React from "react";
import { Card } from "react-bootstrap";
import useAuth from "../../../Assets/hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div data-aos="fade-down-right" className="d-flex justify-content-center align-items-center text-center" style={{ minHeight: '75vh' }}>
      <Card className="shadow-lg mb-5 py-3 px-5">
        <div className="overflow-hidden d-flex justify-content-center">
          <i className="fas fa-user-tie text-warning me-2 fa-4x"></i>
        </div>
        <Card.Body>
          <div className="text-center my-2">
            <Card.Title className="abril-font fw-semi-bold">
              Hi!  {user?.displayName}
            </Card.Title>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          {user?.email}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Profile;
