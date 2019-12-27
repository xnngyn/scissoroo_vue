<template>
  <div>
    <!-- Link trigger modal -->
    <a href="#" data-toggle="modal" data-target="#registrieren">Registrierungs-Formular öffnen</a>

    <!-- Modal -->
    <div
      class="modal fade"
      id="registrieren"
      tabindex="-1"
      role="dialog"
      aria-labelledby="registrierenTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="registrierenTitle">Erzähle uns von dir</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid padding">
              <div class="row justify-content-center text-center">
                <div id="createAcc">
                  <section class="insertuser">
                    <form action="/users/insertuser" method="post" @submit="checkForm">
                      <div class="col-12">
                        <div class="row">
                          <label>Titel</label>
                        </div>
                        <div class="row">
                          <select id="sex" name="sex">
                            <option value="Female" selected>Frau</option>
                            <option value="Male">Herr</option>
                          </select>
                          <br />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="fname">Vorname</label>
                        </div>

                        <div class="row">
                          <input
                            label="Vorname"
                            class="form-control"
                            id="fname"
                            v-model="fname"
                            name="fname"
                            type="text"
                            required
                          />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="lname">Nachname</label>
                        </div>
                        <div class="row">
                          <input
                            class="form-control"
                            id="lname"
                            v-model="lname"
                            name="lname"
                            type="text"
                            required
                          />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="gdatum">Geburtsdatum</label>
                        </div>
                        <div class="row">
                          <input
                            class="form-control"
                            id="gdatum"
                            type="date"
                            name="gdatum"
                            required
                          />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="strasse">Adresse</label>
                        </div>
                        <div>
                          <div class="input-group">
                            <input
                              class="form-control col-9"
                              id="strasse"
                              type="text"
                              name="strasse"
                              placeholder="Straße"
                              required
                            />
                            <input
                              class="form-control col-3"
                              id="hausnr"
                              type="text"
                              name="hausnr"
                              placeholder="Nr."
                              required
                            />
                          </div>
                          <hr />
                          <div class="input-group">
                            <input
                              class="form-control col-4"
                              id="plz"
                              type="text"
                              name="plz"
                              placeholder="PLZ"
                              required
                            />
                            <input
                              class="form-control col-8"
                              id="stadt"
                              type="text"
                              name="stadt"
                              placeholder="Stadt"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="email">E-Mail</label>
                        </div>
                        <div class="row">
                          <input class="form-control" id="email" name="email" type="email" required />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="pass">Passwort</label>
                        </div>
                        <div class="row">
                          <input
                            class="form-control"
                            id="pass"
                            name="pass"
                            type="password"
                            required
                          />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-block">Registrieren</button>
                        <br />
                        <h6>Durch die Registrierung stimmst du den Nutzungsbestimmungen und der Datenschutzerklärung zu.</h6>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <a href="signin">Du hast dich bereits registriert?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>