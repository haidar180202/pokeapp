import React from "react";
import "./assets/css/component.css";

const CardDetail = (props) => {
  // ["generation-viii"].icons.front_default
  // props.datapokemon.data.types[0].type.name
  return (
    <div className=" row p-3">
      {props.datapokemon.data === undefined ? (
        "Error 404..."
      ) : (
        <div className="col-lg-12 bayangan card  p-0 my-4">
          <div
            className={`text-decoration-none pokemon-card ${props.datapokemon.data.types[0].type.name}`}
          >
            <div className={`row`}>
              <div className="col-lg-5 mb-5">
                {props.datapokemon.data === undefined ? (
                  "loading..."
                ) : props.datapokemon.data.sprites === undefined ? (
                  "loading...."
                ) : (
                  <img
                    src={
                      props.datapokemon.data.sprites.other.home.front_default
                    }
                    alt="Image"
                    style={{
                      width: "auto",
                      height: "380px",
                      objectFit: "cover",
                    }}
                    className="card-img-top"
                  />
                )}
              </div>
              {/* pokemon/versions/generation-viii/icons/ */}
              <div className="col-lg-7">
                <div className=" row ">
                  {props.datapokemon !== undefined ? (
                    props.datapokemon.name === undefined ||
                    props.datapokemon.name === "" ? (
                      // get data api jika data redux tidak ditemukan
                      // <div className="card">
                      //   <div className="row">
                      //     <div className="col-lg-4">
                      //       {props.datapokemon.data == undefined ||
                      //       props.datapokemon == "" ? (
                      //         "loading..."
                      //       ) : props.datapokemon.data.sprites === undefined ? (
                      //         "loading...."
                      //       ) : (
                      //         <img
                      //           src={
                      //             props.datapokemon.data.sprites.versions[
                      //               "generation-viii"
                      //             ].icons.front_default
                      //           }
                      //           alt=""
                      //           style={{
                      //             height: 58,
                      //             width: 95,
                      //           }}
                      //           className="m-0 p-0 "
                      //         />
                      //       )}
                      //     </div>
                      //     <div className="col-lg-3 bg-warning">
                      //       <p className="my-4 ">
                      //         {props.datapokemon.data === undefined
                      //           ? "loading"
                      //           : props.datapokemon.data.name}
                      //       </p>
                      //     </div>
                      //   </div>
                      // </div>
                      <div
                        className={`text-decoration-none pokemon-card ${props.datapokemon.data.types[0].type.name}`}
                      >
                        <table className="card bg-warning bayangan">
                          <tr className="row">
                            <td
                              className={`col-lg-4 bg-warning`}
                              style={{ borderRadius: 120 }}
                            >
                              <img
                                src={
                                  props.datapokemon.data.sprites.versions[
                                    "generation-viii"
                                  ].icons.front_default
                                }
                                alt="images"
                                style={{ height: 65, width: 115 }}
                              />
                            </td>
                            <td className="col-lg-4 pt-4">
                              {" "}
                              {props.datapokemon.data.name}
                            </td>
                            <td></td>
                          </tr>
                        </table>
                      </div>
                    ) : (
                      // get data redux
                      <div
                        className={`text-decoration-none pokemon-card ${props.datapokemon.data.types[0].type.name}`}
                      >
                        <table className="row px-3 ">
                          <tr className="col-lg-4">
                            <div className="card bayangan my-3 text-white bg-danger">
                              <td style={{ borderRadius: 120 }}>
                                <img
                                  src={
                                    props.datapokemon.data.sprites.versions[
                                      "generation-viii"
                                    ].icons.front_default
                                  }
                                  alt="images"
                                  style={{ height: 95, width: 155 }}
                                />
                              </td>
                              <td style={{ fontSize: 19, marginTop: 10 }}>
                                {" "}
                                {props.datapokemon.name}
                              </td>
                              <td style={{ fontSize: 19 }}> haidarrrrr</td>
                            </div>
                          </tr>
                          
                          <tr className="col-lg-8">
                            <div className="card bayangan my-3">
                              <td style={{ borderRadius: 120 }}>
                                <img
                                  src={
                                    props.datapokemon.data.sprites.versions[
                                      "generation-viii"
                                    ].icons.front_default
                                  }
                                  alt="images"
                                  style={{ height: 95, width: 155 }}
                                />
                              </td>
                              <td style={{ fontSize: 19, marginTop: 10 }}>
                                {" "}
                                {props.datapokemon.name}
                              </td>
                              <td style={{ fontSize: 19 }}> haidarrrrr</td>
                            </div>
                          </tr>
                          
                        </table>
                      </div>

                      // <div className="row">
                      //   <div className="col-lg-12 ">
                      //     <div className="card">
                      //       <table >
                      //         <tr className="row">
                      //           <td className="col-lg-4 mx-5 bg-warning">
                      //             <img
                      //               src={
                      //                 props.datapokemon.data.sprites.versions[
                      //                   "generation-viii"
                      //                 ].icons.front_default
                      //               }
                      //               alt=""
                      //               style={{ height: 60, width: 95}}
                      //               className=" d-flex"
                      //             />
                      //           </td>
                      //           <td className="col-lg-4 pt-3 mx-5">
                      //             {" "}
                      //             {props.datapokemon.name}
                      //           </td>
                      //           <td></td>
                      //         </tr>
                      //       </table>
                      //     </div>
                      //   </div>
                      //   <div className="col-lg-3">
                      //     {/* <p className="pt-4">{props.datapokemon.name}</p> */}
                      //   </div>
                      // </div>
                    )
                  ) : (
                    "Loading..."
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetail;
