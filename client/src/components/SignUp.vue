<!-- Diese Komponente ist momentan überflüssig, da sie bereits in HomeNichtEingeloggt integriert wurde -->
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
                        <button type="submit" class="btn btn-primary btn-block" @click="addUser">Registrieren</button>
                        <br />
                        <h6>Durch die Registrierung stimmst du den Nutzungsbestimmungen und der Datenschutzerklärung zu.</h6>
                      </div>
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
import PostService from '@/services/PostService'
export default {
  name: 'NewUser',
  data(){
    return {
      sex: '',
      fname: '',
      lname: '',
      bdate: '',
      strasse: '',
      hausnr: '',
      plz: '',
      stadt: '',
      email: '',
      pass: '',
    }
  },
  methods: {
    async addUser(){
      await PostService.addUser({
          sex: this.sex,
          fname: this.fname,
          lname: this.lname,
          bdate: this.bdate,
          strasse: this.strasse,
          hausnr: this.hausnr,
          plz: this.plz,
          stadt: this.stadt,
          email: this.email,
          pass: this.pass,
      })
    }
  }
};
</script>

<style>

</style>