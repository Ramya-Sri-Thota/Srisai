import React from "react";
export const Home = () => {
  return (
    <div className="mb-5">
      <div className="bg pt-5 text-center background">
        <h2 className="text-white">Welcome to Sri Sai Consultancy</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="text-center ">About-us</h2>
            <p>
              Established in both Telugu states of Andhra Pradesh and Telangana
              in 2018, we are providing all HMDA approvals, DTCP approvals, TS-
              BPASS approvals, LRS and BRS Permissions Revenue approvals, Real-
              Estate Marketing, Layout Developments.
            </p>
          </div>
        </div>
      </div>
      <div className="container services">
        <h2 className="text-center ">Services</h2>
        <div className="row">
          <div className="col-md-3">
            <div class="border border-warning border-2 p-3 service-eq-height">
              <div className="text-center">
                <img src="images\download.jpg" width="100" />
              </div>
              <div className="mt-2 text">
                <p>
                  We are providing all HMDA approvals with low cost of price and
                  we are done almost 50 projects (LRS, Building permissions,
                  Layout permissions and Change of Land Use(CLU), etc...)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="border border-warning  border-2 service-eq-height">
              <div className="text-center">
                <img src="images\dtcp.png" width="100" />
              </div>
              <p>
                We are providing TS-Bpass building permissions and layout
                permissions in entire Telangana state.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div class="border border-warning border-2 p-2 service-eq-height">
              <div className="text-center">
                <img src="images\tsbpass.jpg" width="100" />
              </div>
              <p>
                We are providing TS-Bpass building permissions and layout
                permissions in entire Telangana state.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div class="border border-warning border-2 p-2 service-eq-height">
              <div className="text-center">
                <img src="images\tsbpass.png" width="100" />
              </div>
              <p>
                We are providing all type of revenue works in entire Telangana.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <h2>Contact</h2>
      </div>
      <div className="row container">
        <div className="col-sm-6">
          <div>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-2">
                <label for="exampleInputEmail1" class="form-label">
                  Message
                </label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact mt-3">
            <div ClassName="mt-3">
              <h5>Location</h5>
              <h6>Hyderabad, KPHB</h6>
            </div>
            <div ClassName="mt-3">
              <h5>Mail</h5>
              <h6>harsha@gmail.com</h6>
            </div>
            <div ClassName="mt-3">
              <h5>Call</h5>
              <h6>9492433351</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
